import React, { useContext, useRef } from "react";

import "./ProgressWorks.scss";
import { DataContext } from "@/helpers/dataHelpers/dataProvider";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ScrollContext } from "@/helpers/scrollContext";
import { Link } from "react-router-dom";
import AnchorLink from "@/components/AnchorLink/AnchorLink";

export const ProgressWorks = () => {
  const { data } = useContext(DataContext);
  const { scrollToImages } = useContext(ScrollContext);
  const { images: imagesData } = data;
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['0% 50%', '100% 50%'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);

  return (
    <div className="progress-thumbnail-wrapper" ref={container}>
      <div className="progress-thumbnail">
        <motion.span
          className="progress-thumbnail__view"
          style={{ top: y }}
        />
        {imagesData.map((currArImages, i) => (
          <div className="progress-thumbnail__images-wrapper" key={i}>
            {currArImages.map((currImage, j) => (
              <img
                src={currImage}
                alt="works"
                className="progress-thumbnail__image"
                key={j}
                onClick={(e) => scrollToImages(e, `#img-${i}-${j}`)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};