import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import { createClient, createRootClient } from '@/lib/supabase/server';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const root = await createRootClient();

  const { data } = await root
    .from('Profile')
    .select('uuid, name, surname, Role:role_id(id, name)')
    .eq('uuid', user?.id);
  const [body] = data! ?? [];
  const session = { email: user?.email, ...body };

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} overflow-hidden `}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
