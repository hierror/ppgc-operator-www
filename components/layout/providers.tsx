'use client';

import { getSession, saveSession } from '@/lib/storage';
import React, { useEffect } from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';

export default function Providers({
  session,
  children
}: {
  session: any;
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const oldSession = getSession();

      if (oldSession === null) {
        await saveSession(session);
      }
    })();
  }, [session]);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
