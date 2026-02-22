
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";

  const variants: Record<"primary" | "secondary" | "outline", string> = {
    primary:
      "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50",
    secondary:
      "bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:border-slate-600",
    outline:
      "bg-transparent border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;