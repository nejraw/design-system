export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className="py-2 px-4 text-white rounded-sm bg-slate-500 hover:bg-slate-700" type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
