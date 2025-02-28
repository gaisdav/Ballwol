import { FC, HTMLAttributes } from "react";
import Link from "next/link";

interface BreadcrumbLink {
  label: string;
  url?: string;
}

interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  links: BreadcrumbLink[];
  separator?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  links,
  separator = "/",
  className = "",
  ...props
}) => {
  return (
    <nav aria-label="breadcrumbs" className={`text-sm ${className}`} {...props}>
      <ul className="flex items-center gap-2 flex-wrap">
        {links.map((link, index) => (
          <li key={link.url || link.label} className="flex items-center">
            {index > 0 && (
              <div className="mr-2 text-gray-400">{separator} </div>
            )}
            {index === links.length - 1 || !link.url ? (
              <span className="text-nowrap">{link.label}</span>
            ) : (
              <Link
                href={link.url}
                className="text-gray-400 hover:underline text-nowrap"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
