'use client';

import { DataTableSearch } from '@/components/ui/table/data-table-search';
// import { Product } from '@/constants/data';
import { columns } from './columns';
import { SelectionsTable } from './selection-table';
import { useProductTableFilters } from './use-selection-table-filters';

export default function SelectionTable({
  data,
  totalData
}: {
  data: any;
  totalData: number;
}) {
  const {
    categoriesFilter,
    setCategoriesFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery
  } = useProductTableFilters();

  return (
    <div className="space-y-4 ">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="descrição"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        {/* <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        /> */}
      </div>
      <SelectionsTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}
