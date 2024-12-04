import { searchParamsCache } from '@/lib/searchparams';
import { ProductListingPage } from '@/sections/product/view';
import { SearchParams } from 'nuqs/parsers';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Product'
};

export default async function Page({ searchParams }: PageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  await searchParamsCache.parse(searchParams);

  return <ProductListingPage />;
}
