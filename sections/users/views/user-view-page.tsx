import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import EmployeeForm from '../employee-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Usuários', link: '/dashboard/users' },
  { title: 'Criação', link: '/dashboard/users/create' }
];

export default function UserViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <EmployeeForm />
      </div>
    </ScrollArea>
  );
}
