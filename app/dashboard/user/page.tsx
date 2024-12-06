import { searchParamsCache } from '@/lib/searchparams';
import { UserListingPage } from '@/sections/user/views';
import { SearchParams } from 'nuqs/parsers';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Usuários'
};

export default async function Page({ searchParams }: PageProps) {
  await searchParamsCache.parse(searchParams);

  return <UserListingPage />;
}
