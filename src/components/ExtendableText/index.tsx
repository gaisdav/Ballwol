"use client";

import { FC, HTMLAttributes, useState } from "react";
import styles from "./styles.module.scss";

interface ExtendableTextProps extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

const ExtendableText: FC<ExtendableTextProps> = ({
  children,
  className,
  ...props
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const contentStyles = showMore ? "" : styles["content-sm"];

  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={contentStyles}>{children}</div>
      <button onClick={toggleShowMore} className={`${styles.action} mt-2`}>
        {!showMore ? "Read More" : "Show Less"}
      </button>
    </div>
  );
};

export default ExtendableText;
