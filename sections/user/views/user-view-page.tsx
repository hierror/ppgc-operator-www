import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import UserForm from '../user-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Usuários', link: '/dashboard/user' },
  { title: 'Criação', link: '/dashboard/user/create' }
];

export default function UserViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <UserForm />
      </div>
    </ScrollArea>
  );
}
