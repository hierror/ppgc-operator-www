'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import useImageMagick from '@/hooks/use-image-magick';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImageMagick } from '@imagemagick/magick-wasm';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createWorker } from 'tesseract.js';
import { z } from 'zod';
import { SectionContext } from '.';

const formSchema = z.object({
  grade: z.coerce
    .number({ required_error: 'Nota obrigatória' })
    .min(0, 'Nota mínima é 0')
    .max(10, 'Nota máxima é 10')
});

export default function EvaluationLayer({ data }: any) {
  const canvasRef = useRef(null);
  const { status, preprocess } = useImageMagick();
  const { setSection } = useContext(SectionContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grade: undefined
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    (async function () {
      const canvas = canvasRef.current! as HTMLCanvasElement;

      if (canvas !== null && status === 'ready') {
        const ctx = canvas.getContext('2d')!;
        const image = new Image();
        image.src =
          'https://jfydlkwjxroqseehcxhw.supabase.co/storage/v1/object/sign/documents/Scanner_20241203_page-0001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvU2Nhbm5lcl8yMDI0MTIwM19wYWdlLTAwMDEuanBnIiwiaWF0IjoxNzMzNDcwMDU3LCJleHAiOjE3MzQwNzQ4NTd9.W7NdGyFjYwuDLtgXemw725X2FYZCjAjOfkuGaJgm8qQ&t=2024-12-06T07%3A27%3A37.310Z';
        image.crossOrigin = 'Anonymous';

        image.onload = () => {
          const height = image.height;
          const width = image.width;
          ctx.canvas.width = width;
          ctx.canvas.height = height;
          ctx.drawImage(image, 0, 0);

          ImageMagick.readFromCanvas(canvas, async (img) => {
            const pimage = preprocess(img);

            pimage.writeToCanvas(canvas);

            const blob = await new Promise((resolve) => canvas.toBlob(resolve));

            console.log('blob', blob);

            const worker = await createWorker('por');
            await worker.setParameters({
              // tessedit_ocr_engine_mode: OEM.TESSERACT_ONLY,
              // tessedit_pageseg_mode: PSM.SPARSE_TEXT_OSD
            });
            const ret = await worker.recognize(canvas);
            console.log('texto', ret.data.text);
            await worker.terminate();
          });
        };
      }
    })();
  }, [status]);

  console.log('dados', data);

  return (
    <section className="grid grid-cols-7 fixed bg-black/20 h-screen w-screen top-0 left-0 z-50">
      <div className="col-span-5 flex items-center justify-center">
        <iframe
          className="w-4/5 h-[90%]"
          src="https://pdfobject.com/pdf/sample.pdf"
          frameBorder={0}
        />
        {/* <canvas className="absolute invisible" ref={canvasRef}></canvas> */}
      </div>
      <aside className="bg-white col-span-2 p-5">
        <Link href="#" onClick={() => setSection!('main')}>
          <X />
        </Link>
        <div className="pt-10">
          <Heading
            title="Avaliação da ficha de avaliação"
            description={`${data.name} ${data.surname}`}
          />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6">
              <div className="pt-4 w-9/12">
                <FormField
                  control={form.control}
                  name="grade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nota</FormLabel>
                      <FormControl>
                        <Input placeholder="Insira a nota" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="mt-4" type="submit">
                Enviar a nota
              </Button>
            </form>
          </Form>
        </div>
      </aside>
    </section>
  );
}
