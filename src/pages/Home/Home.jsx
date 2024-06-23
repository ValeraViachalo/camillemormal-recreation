import React, { useEffect } from "react";
import "./Home.scss";
import WorksHome from "./Works/Works";
import { DataProvider } from "@/helpers/dataHelpers/dataProvider";
import { motion } from "framer-motion";
import { anim, PageAnim } from "@/helpers/anim";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main {...anim(PageAnim.presencePage)} className="home">
      <DataProvider url="/data/home.json">
        <WorksHome />
      </DataProvider>
    </motion.main>
  );
}
