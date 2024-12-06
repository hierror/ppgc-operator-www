'use client';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

const Badges = {
  approved: 'Aprovado',
  rejected: 'Reprovado',
  waiting_evaluation: 'Aguardando avaliação'
};

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'code',
    header: 'Código'
  },
  {
    accessorKey: 'full_name',
    header: 'Nome completo'
  },
  {
    accessorKey: 'status',
    header: 'Situação',
    cell: ({
      row: {
        original: { status }
      }
    }) => {
      const type = status as keyof typeof Badges;

      return <Badge variant={status}>{Badges[type]}</Badge>;
    }
  },
  {
    accessorKey: 'first_score',
    header: 'Primeira nota'
  },
  {
    accessorKey: 'second_score',
    header: 'Segunda nota'
  },
  {
    accessorKey: 'final_score',
    header: 'Nota final'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
