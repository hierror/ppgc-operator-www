import {
  ColorSpace,
  DitherMethod,
  IMagickImage,
  initializeImageMagick,
  Kernel,
  MagickGeometry,
  MorphologyMethod,
  MorphologySettings,
  Percentage,
  QuantizeSettings
} from '@imagemagick/magick-wasm';
import { useEffect, useState } from 'react';

export default function useImageMagick() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading'
  );

  const preprocess = (image: IMagickImage) => {
    // const density = 400;
    const width = image.width * 1;
    const percentage = 0.4;

    // image.density = new Density(density);
    const geometry = new MagickGeometry(width);

    image.resize(geometry);
    image.deskew(new Percentage(percentage));
    image.trim();

    image.grayscale();

    const settings = new QuantizeSettings();
    settings.colors = 2;
    settings.colorSpace = ColorSpace.Gray;
    settings.ditherMethod = DitherMethod.No;
    image.quantize(settings);

    const morphologySettings = new MorphologySettings(
      MorphologyMethod.Open,
      Kernel.Diamond
    );
    morphologySettings.iterations = 1;
    image.morphology(morphologySettings);

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

    return image;
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('/wasm/magick.wasm');
      const buffer = await response.arrayBuffer();

      initializeImageMagick(buffer).then(() => {
        setStatus('ready');
      });
    })();
  }, []);

  return {
    status,
    preprocess
  };
}
