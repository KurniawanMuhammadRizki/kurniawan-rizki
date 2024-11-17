import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaParallaxCarousel from "./EmblaparalaxCarousel";

interface CarouselProps {
  projectsName: string;
  imageNumber: number;
}

const Carousel: React.FC<CarouselProps> = ({ projectsName, imageNumber }) => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };
  const SLIDE_COUNT = imageNumber;
  const SLIDES = Array.from({ length: SLIDE_COUNT }, (_, i) => ({
    src: `/projects/${projectsName}/${projectsName}-${i}.jpeg`,
    alt: `Slide ${i}`,
  }));

  return (
    <>
      <div className="flex justify-center items-center text-lg font-light ">
        A sneak peek into the project
      </div>
      <EmblaParallaxCarousel
        slides={SLIDES}
        options={OPTIONS}
        className="overflow-hidden py-4 rounded-2xl border-2 border-black"
      />
    </>
  );
};

export default Carousel;
