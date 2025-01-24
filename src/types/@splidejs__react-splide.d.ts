// src/types/@splidejs__react-splide.d.ts
declare module "@splidejs/react-splide" {
  import { FC } from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    className?: string;
  }

  export const Splide: FC<SplideProps>;

  export interface SplideSlideProps {
    className?: string;
  }

  export const SplideSlide: FC<SplideSlideProps>;
}
