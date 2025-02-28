"use client";

import Accordion from "@/components/Accordion";
import { FC, ReactNode, useState } from "react";
import styles from "./customAccardion.module.scss";

type CustomAccordionProps = {
  title: string;
  children: ReactNode;
  noBorder?: boolean;
};

const CustomAccordionIcon: FC<{ open: boolean }> = ({ open }) => {
  const classNames = open ? `${styles.icon} ${styles.iconOpen}` : styles.icon;

  return <div className={classNames} />;
};

export const CustomAccordion: FC<CustomAccordionProps> = ({
  title,
  noBorder,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Accordion
      onToggle={toggleOpen}
      noBorder={noBorder}
      title={title}
      customIcon={<CustomAccordionIcon open={open} />}
    >
      {children}
    </Accordion>
  );
};
