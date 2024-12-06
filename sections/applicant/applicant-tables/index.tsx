'use client';

import { DataTableSearch } from '@/components/ui/table/data-table-search';
// import { Product } from '@/constants/data';
import { columns } from './columns';
import { SelectionsTable } from './selection-table';
import { useProductTableFilters } from './use-selection-table-filters';

import { createContext, useState } from 'react';
import EvaluationLayer from './evaluation-layer';
import MemorialLayer from './memorial-layer';

interface Props {
  section?: string;
  setSection?: React.Dispatch<React.SetStateAction<string>>;
}

export const SectionContext = createContext<Props>({});

export default function SelectionTable({
  data,
  totalData
}: {
  data: any;
  totalData: number;
}) {
  const [section, setSection] = useState('main');
  const { searchQuery, setPage, setSearchQuery } = useProductTableFilters();

  console.log('section', section);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {section === 'memorial' && <MemorialLayer data={data} />}
      {section === 'avaliacao' && <EvaluationLayer data={data} />}
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
    </SectionContext.Provider>
  );
}
