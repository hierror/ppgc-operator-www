import { searchParamsCache } from '@/lib/searchparams';
import { SelectionListingPage } from '@/sections/selection/view';
import { SearchParams } from 'nuqs/parsers';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Processos seletivos'
};

export default async function Page({ searchParams }: pageProps) {
  await searchParamsCache.parse(searchParams);

  return <SelectionListingPage />;
}
