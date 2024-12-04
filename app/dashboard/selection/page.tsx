import { searchParamsCache } from '@/lib/searchparams';
import { SelectionListingPage } from '@/sections/selection/view';
import { SearchParams } from 'nuqs/parsers';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Processos seletivos'
};

export default async function Page({ searchParams }: PageProps) {
  await searchParamsCache.parse(searchParams);

  return <SelectionListingPage />;
}
