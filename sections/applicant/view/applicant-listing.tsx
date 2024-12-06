import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import SelectionTable from '../applicant-tables';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Processos seletivos', link: '/dashboard/selection' }
];

type ApplicantListingPage = {
  selection: any;
};

export default async function ApplicantListingPage({
  selection
}: ApplicantListingPage) {
  // const page = searchParamsCache.get('page');
  // const search = searchParamsCache.get('q');
  // const pageLimit = searchParamsCache.get('limit');
  // const categories = searchParamsCache.get('categories');

  // const filters = {
  //   page,
  //   limit: pageLimit,
  //   ...(search && { search }),
  //   ...(categories && { categories: categories })
  // };

  // const totalProducts = data.total_products;
  // const products: Product[] = data.products;

  console.log(selection);

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Inscritos (${selection.applicants?.length})`}
            description={selection.description}
          />
          <Link
            href={'/dashboard/applicant/new'}
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className="mr-2 h-4 w-4" /> Cadastrar novo inscrito
          </Link>
        </div>
        <Separator />
        <SelectionTable
          data={selection.applicants}
          totalData={selection.applicants?.length!}
        />
      </div>
    </PageContainer>
  );
}
