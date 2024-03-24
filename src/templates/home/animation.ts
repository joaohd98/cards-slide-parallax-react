import {useRef} from "react";
import useRefElements from "../../hooks/useRefElements";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export default () => {
  const containerRef = useRef(null);
  const [cardsRef, setCardRef] = useRefElements<HTMLElement>();

  // container animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true
      }
    });

    // tl.to(containerRef.current, { y: '150rem'})
  }, { scope: containerRef });

  // cards animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true
      }
    });

    cardsRef.current.forEach((_, index) => {
      if(index === 0) {
        return;
      }

      tl.to(cardsRef.current, { y: (value) => {
        const total = 68 * value;
        const mapRange = gsap.utils.mapRange(0, value, 0, total, index);

        return `${-gsap.utils.clamp(0, total, mapRange)}%`
      }})
    });

  }, { scope: containerRef });

  return {
    containerRef,
    setCardRef
  }
}