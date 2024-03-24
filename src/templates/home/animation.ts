import {useRef} from "react";
import useRefElements from "../../hooks/useRefElements";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import inverseMapRange from "../../utils/inverse-map-range";

export default () => {
  const pinRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardsRef, setCardRef] = useRefElements<HTMLElement>();

  useGSAP(() => {
    const tl1 = stContainerSticky();
    const tl2 = stCardsSlide();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 789px)", () => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top 45%",
        end: "+=1500 45%",
        scrub: true,
        pin: true,
        onUpdate: ({ progress }) => {
          tl1.progress(progress);
          tl2.progress(progress);
        }
      });

      return () => {
        tl1.revert();
        tl2.revert();
      }
    });
  }, { scope: pinRef });

  const stContainerSticky = () => {
    const tl = gsap.timeline({ paused: true });

    cardsRef.current.forEach((_, index) => {
      if(index === 0) {
        return;
      }

      tl.to(cardsRef.current, { y: (position) => {
        const min = position * 25;
        const max = position * 95;
        const mapRange = inverseMapRange(0, position, min, max, index);

        return `${gsap.utils.clamp(min, max, mapRange)}%`;
      }});

      tl.to(cardsRef.current, { yPercent: -index * 25}, '<');
    });

    return tl;
  }

  const stCardsSlide = () => {
    const tl = gsap.timeline({ paused: true });

    return tl;
  }

  return {
    pinRef,
    containerRef,
    setCardRef
  }
}