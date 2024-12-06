import { Selections } from '@/database/entity';
import { createRootClient } from '@/lib/supabase/server';
import ApplicantForm from '@/sections/applicant/applicant-form';

export const metadata = {
  title: 'Inscritos'
};

export default async function Page({
  params
}: {
  params: Promise<{ selectionUuid: string }>;
}) {
  //const applicantUuid = (await params).applicantUuid;

  const root = await createRootClient();

  const { data } = await root.from('Selection').select('uuid, description');

  const selections = Selections(data!)!;

  return <ApplicantForm selections={selections} />;
}
