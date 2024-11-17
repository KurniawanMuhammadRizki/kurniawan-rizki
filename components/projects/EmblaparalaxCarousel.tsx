"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "@/app/_styles/emblaParallax.css";

type SlideType = {
  src: string;
  alt?: string;
};

interface PropType {
  slides: SlideType[];
  options?: EmblaOptionsType;
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
}

const TWEEN_FACTOR = 0.2;

const EmblaParallaxCarousel: React.FC<PropType> = ({
  slides,
  options,
  className = "",
  showArrows = true,
  showDots = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      startDelay: 5000,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    }),
  ]);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.stop();
    emblaApi.scrollPrev();
    setTimeout(() => autoScroll.play(), 5000);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.stop();
    emblaApi.scrollNext();
    setTimeout(() => autoScroll.play(), 5000);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      const autoScroll = emblaApi.plugins()?.autoScroll;
      if (!autoScroll) return;

      autoScroll.stop();
      emblaApi.scrollTo(index);
      setTimeout(() => autoScroll.play(), 5000);
    },
    [emblaApi]
  );

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1)
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                if (sign === 1)
                  diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`;
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };

    onReInit();
    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("reInit", onReInit)
      .on("select", onSelect);

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenParallax)
        .off("scroll", tweenParallax)
        .off("reInit", onReInit)
        .off("select", onSelect);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);

  return (
    <div
      className={`relative w-full lg:max-w-4xl 2xl:max-w-5xl mx-auto ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_80%] min-w-0 pl-4" key={index}>
              <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[400px] 2xl:h-[500px] border-2 border-gray-200">
                <div className="embla__parallax">
                  <div className="embla__parallax__layer">
                    <Image
                      className="embla__parallax__img"
                      src={slide.src}
                      alt={slide.alt || `Slide ${index + 1}`}
                      height={2000}
                      width={2000}
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className="absolute left-[15%] translate-x-1/2 top-1/2 -translate-y-1/2 bg-gray-400 hover:bg-primary-orange/90 rounded-full p-2 transition-all"
            onClick={scrollPrev}
            aria-label="Previous slide">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-[15%] top-1/2 -translate-y-1/2 bg-gray-400 hover:bg-primary-orange/90 rounded-full p-2 transition-all"
            onClick={scrollNext}
            aria-label="Next slide">
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors hover:bg-primary-orange ${
                index === selectedIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmblaParallaxCarousel;
