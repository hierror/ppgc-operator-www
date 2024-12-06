import { UserViewPage } from '@/sections/user/views';

export const metadata = {
  title: 'Visão do usuário'
};

export default async function Page({
  params
}: {
  params: Promise<{ userUuid: string }>;
}) {
  const slug = (await params).userUuid;

  return <UserViewPage />;
}
