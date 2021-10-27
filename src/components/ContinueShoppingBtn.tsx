import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const ContinueShoppingBtn = () => {
  return (
    <Link href="/store">
      <a className="flex items-center mb-4 md:mb-0">
        <span className="mr-2">
          <AiOutlineArrowLeft />
        </span>
        Continue Shopping
      </a>
    </Link>
  );
};
