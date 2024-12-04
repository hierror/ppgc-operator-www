import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Selections } from '@/database/entity';
import { searchParamsCache } from '@/lib/searchparams';
import { createRootClient } from '@/lib/supabase/server';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import SelectionTable from '../selection-tables';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Processos seletivos', link: '/dashboard/selection' }
];

type SelectionListingPage = {};

export default async function SelectionListingPage({}: SelectionListingPage) {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const categories = searchParamsCache.get('categories');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };

  // const totalProducts = data.total_products;
  // const products: Product[] = data.products;

  const root = await createRootClient();

  const { data } = await root
    .from('Selection')
    .select('uuid, description, year, start_date, end_date, Applicant(count)');

  console.log('pegou  no listing', Selections(data!));

  const selections = Selections(data!);

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Processos seletivos (${selections?.length})`}
            description="Gerenciamento de processos seletivos"
          />
          <Link
            href={'/dashboard/product/new'}
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className="mr-2 h-4 w-4" /> Criar novo processo
          </Link>
        </div>
        <Separator />
        <SelectionTable data={selections} totalData={selections?.length!} />
      </div>
    </PageContainer>
  );
}
