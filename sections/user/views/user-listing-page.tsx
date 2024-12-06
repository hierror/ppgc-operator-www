import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Profiles } from '@/database/entity';
import { searchParamsCache } from '@/lib/searchparams';
import { createRootClient } from '@/lib/supabase/server';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import UsersTable from '../user-tables';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Employee', link: '/dashboard/employee' }
];

type TEmployeeListingPage = {};

export default async function UserListingPage({}: TEmployeeListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  console.log(searchParamsCache);

  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender })
  };

  const root = await createRootClient();

  const { data } = await root
    .from('Profile')
    .select('uuid, name, surname, email, Role:role_id(id, name)');

  console.log('pegou  no listing', Profiles(data!));

  const profiles = Profiles(data!);

  // mock api call
  // const data = await fakeUsers.getUsers(filters);
  // const totalUsers = data.total_users;
  // const employee: Employee[] = data.users;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Usuários (${profiles.length})`}
            description="Gerenciar usuários"
          />

          <Link
            href={'/dashboard/applicant/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Criar novo usuário
          </Link>
        </div>
        <Separator />
        <UsersTable data={profiles} totalData={profiles.length} />
      </div>
    </PageContainer>
  );
}
