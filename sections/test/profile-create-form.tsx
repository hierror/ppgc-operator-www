'use client';

import { Heading } from '@/components/ui/heading';
import useImageMagick from '@/hooks/use-image-magick';
import {
  ColorSpace,
  Density,
  DitherMethod,
  ImageMagick,
  Kernel,
  MagickGeometry,
  MorphologyMethod,
  MorphologySettings,
  Percentage,
  QuantizeSettings
} from '@imagemagick/magick-wasm';
import { useEffect, useRef } from 'react';
import { createWorker } from 'tesseract.js';

const ProfileCreateForm: React.FC = ({}) => {
  const canvasRef = useRef(null);
  const { status } = useImageMagick();

  console.log(status, 'canvas', canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current! as HTMLCanvasElement;

    if (canvas !== null && status === 'ready') {
      const ctx = canvas.getContext('2d')!;
      const image = new Image();
      image.src =
        'https://jfydlkwjxroqseehcxhw.supabase.co/storage/v1/object/sign/documents/Scanner_20241203_page-0001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvU2Nhbm5lcl8yMDI0MTIwM19wYWdlLTAwMDEuanBnIiwiaWF0IjoxNzMzMzgxMzMyLCJleHAiOjE3MzM5ODYxMzJ9.idZ6TsFHUP5zb7lcZYfdUAcEuFn1RHuK_YMDRRqO5Zo&t=2024-12-05T06%3A48%3A52.891Z';
      image.crossOrigin = 'Anonymous';

      image.onload = function () {
        const nheight = image.height * 1.5;
        const nwidth = image.width * 1.5;
        ctx.canvas.width = nwidth;
        ctx.canvas.height = nheight;
        ctx.drawImage(image, 0, 0);

        ImageMagick.readFromCanvas(canvas, async (nimg) => {
          nimg.density = new Density(400);
          const geometry = new MagickGeometry(nwidth);

          nimg.resize(geometry);
          nimg.deskew(new Percentage(0.4));
          nimg.trim();

          nimg.grayscale();

          // // //   // binarization
          const msettings = new QuantizeSettings();
          msettings.colors = 2;
          msettings.colorSpace = ColorSpace.Gray;
          msettings.ditherMethod = DitherMethod.No;
          nimg.quantize(msettings);

          // // morphologic ERODE
          const nsettings = new MorphologySettings(
            MorphologyMethod.Open,
            Kernel.Diamond
          );
          nsettings.iterations = 1;
          nimg.morphology(nsettings);

          // // // morphologic Dilate
          // const settings = new MorphologySettings(
          //   MorphologyMethod.Close,
          //   Kernel.Diamond
          // );
          // settings.iterations = 1;
          // nimg.morphology(settings);

          // // // // morphologic Dilate
          // const tsettings = new MorphologySettings(
          //   MorphologyMethod.Erode,
          //   Kernel.Diamond
          // );
          // tsettings.iterations = 1;
          // nimg.morphology(settings);

          nimg.writeToCanvas(canvas);

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
  }, [status, canvasRef]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={'test'} description={'aaaaa'} />
      </div>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default ProfileCreateForm;
