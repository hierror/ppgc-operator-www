import { Selection } from '@/database/entity';
import { createRootClient } from '@/lib/supabase/server';
import { ApplicantListingPage } from '@/sections/applicant/view';

export const metadata = {
  title: 'Inscritos'
};

export default async function Page({
  params
}: {
  params: Promise<{ selectionUuid: string }>;
}) {
  const selectionUuid = (await params).selectionUuid;

  const root = await createRootClient();

  const { data } = await root
    .from('Selection')
    .select('uuid, description, year, start_date, end_date, Applicant(*)')
    .eq('uuid', selectionUuid);

  const [selection] = data!;

  const selections = Selection(selection!)!;

  return <ApplicantListingPage selection={selections} />;
}
