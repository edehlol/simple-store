const Button = ({
  children,
  onClick,
  className,
  variant,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`transition duration-200 ease-in-out py-3 px-5  rounded-lg font-semibold  
      ${className}
      ${variant ? variant : 'primary'}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
