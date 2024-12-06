import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Button, buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Selections } from '@/database/entity';
import { searchParamsCache } from '@/lib/searchparams';
import { createRootClient } from '@/lib/supabase/server';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
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
          <Button
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
            disabled
          >
            <Plus className="mr-2 h-4 w-4" /> Cadastrar novo processo seletivo
          </Button>
        </div>
        <Separator />
        <SelectionTable data={selections} totalData={selections?.length!} />
      </div>
    </PageContainer>
  );
}
