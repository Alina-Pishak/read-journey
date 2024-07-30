export interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary";
  className?: string;
}
