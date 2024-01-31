import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import s from "./EmblaCarousel.module.css";
import sm from "../../pics/sm.png"
import flashcards from "../../pics/flashcards.png"

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className={s.embla} ref={emblaRef}>
      <div className={s.embla__container}>
        <div className={s.embla__slide}>
          <div className="embla__slide__number">
            <span>1</span>
          </div>
          <img
            className="embla__slide__img"
            src={sm}
            alt="Your alt text"
          />
          Slide 1</div>
        <div className={s.embla__slide}>
          <div className="embla__slide__number">
            <span>2</span>
          </div>
          <img
            className="embla__slide__img"
            src={flashcards}
            alt="Your alt text"
          />
          Slide 2</div>
        {/*<div className={s.embla__slide}>Slide 3</div>*/}
        <div className={s.embla__slide}>
          <div className="embla__slide__number">
            <span>1</span>
          </div>
          <img
            className="embla__slide__img"
            src={sm}
            alt="Your alt text"
          />
          Slide 3</div>
      </div>
    </div>
  )
}