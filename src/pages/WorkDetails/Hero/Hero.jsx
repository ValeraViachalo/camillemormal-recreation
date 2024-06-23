import { DataContext } from "@/helpers/dataHelpers/dataProvider";
import React, { useContext, useRef } from "react";

import "./Hero.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { anim, PageAnim, WorksAnim } from "@/helpers/anim";
import AnchorLink from "@/components/AnchorLink/AnchorLink";

export default function HeroWorksDetails() {
  const { data } = useContext(DataContext);
  const { hero: heroData } = data;

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0% 0%", "100% 0%"],
  });
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["50% 0vh", "50% 20vh"]
  );

  return (
    <motion.section
    {...anim(PageAnim.block)}
    className="hero" ref={container}>
      <motion.img
        src={heroData.image}
        alt=""
        className="hero__background"
        style={{ objectPosition }}
      />
      <div className="description">
        <h1 className="title">
          {heroData.title.map((currT, i) => (
            <motion.span {...anim(WorksAnim.hero)} custom={i} key={i}>{currT}</motion.span>
          ))}
        </h1>

        <div className="lead-designer">
          <motion.h2 {...anim(WorksAnim.hero)} custom={2.5}>Lead Designer</motion.h2>
          <motion.p {...anim(WorksAnim.hero)} custom={3} className="small-text shadow" dangerouslySetInnerHTML={{ __html: heroData.leadDesigner }} />
        </div>

        <div className="done-with">
          <motion.h2 {...anim(WorksAnim.hero)} custom={3}>Done With</motion.h2>
          <motion.p className="shadow small-text" {...anim(WorksAnim.hero)} custom={3}>{heroData.doneWith}</motion.p>
        </div>

        <div className="scroll-down">
          <AnchorLink className="small-text" toSection="#works-images">
            Scroll down
          </AnchorLink>
        </div>
      </div>
    </motion.section>
  );
}
