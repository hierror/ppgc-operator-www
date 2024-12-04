import { searchParamsCache } from '@/lib/searchparams';
import { UserListingPage } from '@/sections/users/views';
import { SearchParams } from 'nuqs/parsers';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Usuários'
};

export default async function Page({ searchParams }: pageProps) {
  await searchParamsCache.parse(searchParams);

  return <UserListingPage />;
}
