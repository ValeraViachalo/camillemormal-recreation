import { ScrollContext } from "@/helpers/scrollContext";
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import React, { useEffect, useState, useContext } from "react";

import "./ProgressBar.scss";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 });
  const [rangeValue, setRangeValue] = useState(0);
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  const { rangeScrollTo } = useContext(ScrollContext);

  const handleRangeChange = (e) => {
    const value = e.target.value;
    setRangeValue(value);
    const scrollTo = (documentHeight * value) / 100;
    rangeScrollTo(scrollTo);
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setRangeValue(v * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="progress-bar">
      <motion.div className="progress-bar__bar" style={{ scaleY }} />
      <input
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
        className="progress-bar__range"
      />
    </div>
  );
};
