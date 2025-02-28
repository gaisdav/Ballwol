"use client";

import { FC, useRef, useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";
import ChevronIcon from "../../../public/assets/icons/chevron_right.svg";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndicator = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const index = Math.round(
      (scrollLeft / (scrollWidth - clientWidth)) * (images.length - 1),
    );
    setActiveIndex(index);
  }, [images.length]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", updateIndicator);
    return () => carousel.removeEventListener("scroll", updateIndicator);
  }, [updateIndicator]);

  const indicatorWidth: number = 100 / images.length;

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.action} ${styles.leftAction}`}
        onClick={() => scroll("left")}
      >
        <Image
          height={20}
          width={20}
          src={ChevronIcon}
          alt="carousel chevron"
        />
      </button>

      <div ref={carouselRef} className={styles["carousel-track"]}>
        {images.map((src, index) => (
          <div key={index} className={styles["carousel-slide"]}>
            <img
              src={src}
              loading={index === 0 ? "eager" : "lazy"}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button className={styles.action} onClick={() => scroll("right")}>
        <Image
          height={20}
          width={20}
          src={ChevronIcon}
          alt="carousel chevron"
        />
      </button>

      <div className={styles.indicatorWrapper}>
        <div
          className={styles.indicator}
          style={{
            width: `${indicatorWidth}%`,
            transform: `translateX(${100 * activeIndex}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
