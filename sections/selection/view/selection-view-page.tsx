import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import ProductForm from '../selection-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Processos seletivos', link: '/dashboard/selection' },
  { title: 'Criação', link: '/dashboard/selection/create' }
];

export default function SelectionViewPage() {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductForm />
      </div>
    </PageContainer>
  );
}
