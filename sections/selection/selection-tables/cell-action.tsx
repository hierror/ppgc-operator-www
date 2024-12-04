import { Product } from '@/constants/data';
import { ArrowRight } from 'lucide-react';

interface CellActionProps {
  data: Product;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  // const [loading, setLoading] = useState(false);
  // const [open, setOpen] = useState(false);
  // const router = useRouter();

  // const onConfirm = async () => {};

  return (
    <>
      <ArrowRight className="mr-2 h-4 w-4" />
    </>
  );
};
