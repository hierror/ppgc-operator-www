import { ProfileViewPage } from '@/sections/profile/view';
import { SearchParams } from 'nuqs/parsers';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Profile'
};

export default async function Page({ searchParams }: PageProps) {
  return <ProfileViewPage />;
}
