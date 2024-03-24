import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

const GSAPInitialize = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return null;
}

export default GSAPInitialize;
