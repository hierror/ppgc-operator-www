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
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SectionContext } from '.';

const formSchema = z.object({
  grade: z.coerce
    .number({ required_error: 'Nota obrigatória' })
    .min(0, 'Nota mínima é 0')
    .max(10, 'Nota máxima é 10')
});

export default function MemorialLayer({ data }: any) {
  const { section, setSection } = useContext(SectionContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grade: undefined
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="grid grid-cols-7 fixed bg-black/20 h-screen w-screen top-0 left-0 z-50">
      <div className="col-span-5 flex items-center justify-center">
        <iframe
          className="w-4/5 h-3/4"
          src="https://www.youtube.com/embed/QyBHDEZvDmo"
          frameBorder={0}
        />
      </div>
      <aside className="bg-white col-span-2 p-5">
        <Link href="#" onClick={() => setSection!('main')}>
          <X />
        </Link>
        <div className="pt-10">
          <Heading
            title="Avaliação de memorial"
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
