'use client';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: 'Nome'
  },
  {
    accessorKey: 'surname',
    header: 'Sobrenome'
  },
  {
    accessorKey: 'email',
    header: 'E-mail'
  },
  {
    accessorKey: 'role',
    header: 'Função'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row} />
  }
];
