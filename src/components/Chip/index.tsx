import { FC, HTMLAttributes, ReactNode } from "react";

interface Chip extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  label: string;
}

const Chip: FC<Chip> = ({ icon, label, className = "", ...props }) => {
  return (
    <div
      className={`flex items-center gap-2 p-1 pr-1.5 pl-1.5 bg-gray-200 w-max text-sm leading-4 text-nowrap ${className}`}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Chip;
