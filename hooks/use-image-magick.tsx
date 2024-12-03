import { initializeImageMagick } from '@imagemagick/magick-wasm';
import { useEffect, useState } from 'react';

// transformar esses valores em enum
export default function useImageMagick() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading'
  );

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
    status
  };
}
