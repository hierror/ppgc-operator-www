'use server';

import { createRootClient } from '@/lib/supabase/server';

export const create = async (formData: any) => {
  const root = await createRootClient();

  console.log('dados', formData);

  //   let { data, error } = await root.storage
  //     .from('documents')
  //     .upload('uuid/avatar1.png', avatarFile, {
  //       cacheControl: '3600',
  //       upsert: false
  //     });

  //   console.log(data);

  //   if (error) {
  //     console.log(error);
  //   }
};
