import {useRef} from "react";
import useRefElements from "../../hooks/useRefElements";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";

export default () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [cardsRef, setCardRef] = useRefElements<HTMLElement>();

  useGSAP(() => {
    const tl1 = stContainerSticky();
    const tl2 = stCardsSlide();

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      pin: true,
      scrub: true,
      markers: true,
      onUpdate: ({ progress }) => {
        tl1.progress(progress);
        tl2.progress(progress);
      }
    });
  }, { scope: sectionRef });

  const stContainerSticky = () => {
    const tl = gsap.timeline({ paused: true });

    cardsRef.current.forEach((_, index) => {
      if(index === 0) {
        return;
      }

      tl.to(cardsRef.current, { yPercent: (value) => {
          const total = 68 * value;
          const mapRange = gsap.utils.mapRange(0, value, 0, total, index);

          return -gsap.utils.clamp(0, total, mapRange);
        }})
    });

    return tl;
  }

  const stCardsSlide = () => {
    const tl = gsap.timeline({ paused: true });
    tl.to(containerRef.current, { yPercent: -20});

    return tl;
  }

  return {
    sectionRef,
    containerRef,
    setCardRef
  }
}