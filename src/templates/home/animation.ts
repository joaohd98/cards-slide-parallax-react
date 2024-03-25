import {useRef} from "react";
import useRefElements from "../../hooks/useRefElements";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import inverseMapRange from "../../utils/inverse-map-range";

export default () => {
  const pinRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardsRef, setCardRef] = useRefElements<HTMLElement>();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 789px)", () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top 45%",
          end: "+=1800 45%",
          scrub: true,
          pin: true,
        }
      });

      const bounds = cardsRef.current.map(
        (_, index) => ({min: index * 25, max: index * 95})
      );

      bounds.map((bound, index) => {
        if (index === 0) {
          return;
        }

        tl.to(cardsRef.current, {
          y: (position) => {
            const {min, max} = bounds[position];
            const mapRange = inverseMapRange(0, position, min, max, index);
            return `${mapRange}%`;
          }
        });

        tl.to(containerRef.current, {yPercent: -bound.min}, '<');
      });

      return () => {
        gsap.set([cardsRef.current, containerRef.current], { clearProps: 'all' })

        tl.kill();
      }
    });
  }, { scope: pinRef });

  return {
    pinRef,
    containerRef,
    setCardRef
  }
}