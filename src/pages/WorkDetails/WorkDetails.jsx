import React, { useEffect, useState, useRef, useContext } from "react";
import HeroWorksDetails from "./Hero/Hero";
import { DataProvider } from "@/helpers/dataHelpers/dataProvider";
import WorksLink from "./WorksLink/WorksLink";
import { motion } from 'framer-motion';
import { anim, PageAnim } from "@/helpers/anim";
import { useLocation } from "react-router-dom";
import WorkImages from "./WorkImages/WorkImages";
import { WorksHeader } from "./WorksHeader/WorksHeader";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";


export default function WorkDetails() {
  const [project, setProject] = useState();
  const location = useLocation();
  const navigating = useRef(false); // Ref to track navigating state

  useEffect(() => {
    if (!navigating.current) {
      setProject(location.pathname.split("/works/").join(""));
    }
  }, []);

  useEffect(() => {
    if (!navigating.current) {
      window.scrollTo(0, 0);
      setProject(location.pathname.split("/works/").join(""));
    }
  }, [location.pathname]);

  const setNavigating = (state) => {
    navigating.current = state;
  };

  return (
    <motion.main {...anim(PageAnim.presencePage)} className="works-details">
      <DataProvider url={`/data/works/${project}.json`}>
        <ProgressBar />
        <WorksHeader />
        <HeroWorksDetails />
        <WorkImages />
        <WorksLink setNavigating={setNavigating} />
      </DataProvider>
    </motion.main>
  );
}
