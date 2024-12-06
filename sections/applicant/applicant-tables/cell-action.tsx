import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface CellActionProps {
  data: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  // const [loading, setLoading] = useState(false);
  // const [open, setOpen] = useState(false);
  // const router = useRouter();

  // const onConfirm = async () => {};

  return (
    <Link href={`/dashboard/applicant/${data.uuid}`}>
      <ChevronRight className="mr-2 h-4 w-4" />
    </Link>
  );
};
