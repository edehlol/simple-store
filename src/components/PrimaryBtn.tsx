import React from 'react';
import Link from 'next/link';

const PrimaryBtn = ({
  children,
  onClick,
  className,
  inverted,
  link,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  inverted?: boolean;
  link?: string;
}) => {
  return link ? (
    <Link href={link}>
      <a
        onClick={onClick}
        className={`${
          inverted
            ? ' border-black bg-blue-500  hover:bg-blue-600 active:bg-blue-700 text-white'
            : 'hover:bg-white border-black bg-black text-white hover:text-black'
        }  btn-primary ${className}`}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${
        inverted
          ? 'hover:bg-gray-400 border-black bg-white hover:text-black'
          : 'hover:bg-white border-black bg-black text-white hover:text-black'
      }  btn-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
