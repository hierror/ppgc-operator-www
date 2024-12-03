import { useState } from 'react';

export default function useTesseract() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading'
  );
  const [worker, setWorker] = useState(null);

  return {
    status,
    worker
  };
}
