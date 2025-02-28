import { FC, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import ChevronIcon from "../../../public/assets/icons/chevron_right.svg";

interface AccordionProps extends HTMLAttributes<HTMLDetailsElement> {
  title: string;
  customIcon?: ReactNode;
  noBorder?: boolean;
}

const Accordion: FC<AccordionProps> = ({
  title,
  className = "",
  children,
  customIcon,
  noBorder = false,
  ...props
}) => {
  const borderClass = noBorder ? styles["no-border"] : "";

  return (
    <details
      className={`${styles.details} ${borderClass} ${className}`}
      {...props}
    >
      <summary className={styles.summary}>
        {title}{" "}
        <div>
          {customIcon || (
            <Image
              className={styles.icon}
              src={ChevronIcon}
              alt="accordion chevron"
            />
          )}
        </div>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
};

export default Accordion;
