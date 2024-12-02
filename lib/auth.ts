'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

export async function login(data: SignInWithPasswordCredentials) {
  const supabase = await createClient();

  console.log(process.env.SUPABASE_URL, supabase);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
  }

  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
}
