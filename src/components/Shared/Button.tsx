
interface ButtonProps {
  classNames?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, classNames, ...rest }) => {
  return (
    <button
      className={`${classNames} border-solid border-2 p-4`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;