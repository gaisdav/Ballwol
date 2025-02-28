import { FC, FunctionComponent, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import LogoIcon from "../../../public/assets/icons/logo.svg";
import Link from "next/link";
import {
  MagnifyingIcon,
  CartIcon,
  CompassIcon,
  ConversationIcon,
  UserIcon,
} from "@/components/Menu/Icons";

const icons: Record<string, FunctionComponent<{ active: boolean }>> = {
  search: MagnifyingIcon,
  compass: CompassIcon,
  conversation: ConversationIcon,
  cart: CartIcon,
  user: UserIcon,
};

interface MenuProps extends HTMLAttributes<HTMLElement> {
  pages: {
    icon: "search" | "compass" | "conversation" | "cart" | "user";
    path: string;
    badge?: ReactNode;
    active?: boolean;
  }[];
}

const Menu: FC<MenuProps> = ({ pages }) => {
  return (
    <nav className={styles.wrapper}>
      <Image src={LogoIcon} alt="logo" width={24} height={24} />

      <ul className="w-max flex flex-col gap-5">
        {pages.map((page, index) => {
          const Icon = icons[page.icon];

          return (
            <li key={index} className="h-min">
              <Link
                href={page.path}
                className="w-[48px] h-[48px] flex items-center justify-center relative"
              >
                <Icon active={Boolean(page.active)} />

                {page.badge && <div className={styles.badge}>{page.badge}</div>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
