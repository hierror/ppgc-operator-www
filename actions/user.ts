'use server';

import { Roles } from '@/constants/enums';
import { createRootClient } from '@/lib/supabase/server';

export const create = async (formData: any) => {
  const root = await createRootClient();

  const credentials = {
    email: formData.email,
    password: 'teste12345'
  };

  const { data: auth, error: authError } = await root.auth.signUp(credentials);

  const { data, error } = await root.from('Profile').insert({
    uuid: auth.user?.id,
    name: formData.name,
    surname: formData.surname,
    email: formData.email,
    role_id: Roles[formData.role]
  });

  console.log(data);

  if (error) {
    console.log(error);
  }
};

export const update = async (formData: any) => {
  const root = await createRootClient();

  const { data, error } = await root.from('Profile').update({
    name: formData.name,
    surname: formData.surname,
    email: formData.email,
    role_id: Roles[formData.role]
  });

  console.log(data);

  if (error) {
    console.log(error);
  }
};
