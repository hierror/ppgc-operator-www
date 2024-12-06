import { getSession, saveSession } from '@/lib/storage';
import { useEffect, useState } from 'react';

export default function useSession({ session: fetchedSession }: any) {
  const [session, setSession] = useState(fetchedSession);

  useEffect(() => {
    (async () => {
      const oldSession = getSession();

      if (oldSession === null) {
        await saveSession(fetchedSession);
        setSession(fetchedSession);
      }
    })();
  }, [fetchedSession]);

  return {
    session,
    setSession
  };
}
