'use client';
import { Product } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'year',
    header: 'Ano'
  },
  {
    accessorKey: 'applicants',
    header: 'Inscritos'
  },
  {
    accessorKey: 'description',
    header: 'Descrição'
  },
  {
    accessorKey: 'start_date',
    header: 'Data de início'
  },
  {
    accessorKey: 'end_date',
    header: 'Data final'
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
