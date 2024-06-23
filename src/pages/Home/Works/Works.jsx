import { DataContext } from "@/helpers/dataHelpers/dataProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Works.scss";
import { AnimatePresence, motion } from "framer-motion";
import { anim, PageAnim, SliderAnim } from "@/helpers/anim";
import classNames from "classnames";

export default function WorksHome() {
  const { data } = useContext(DataContext);

  const [[page, direction], setPage] = useState([0, 0]);
  const [activeWork, setActiveWork] = useState(data.worksList[0]);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [hover, setHover] = useState(false)

  const paginate = (newDirection) => {
    const newPage =
      (page + newDirection + data.worksList.length) % data.worksList.length;
    setPage([newPage, newDirection]);
    setActiveWork(data.worksList[newPage]);
  };

  const paginateThumbnail = (index) => {
    const newPage = (index + data.worksList.length) % data.worksList.length;
    const direction = index < page ? -1 : 1;
    setPage([newPage, direction]);
    setActiveWork(data.worksList[newPage]);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < 500) return;

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        paginate(1);
      } else if (deltaY < 0) {
        paginate(-1);
      }
      setLastScrollTime(currentTime);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [lastScrollTime]);

  return (
    <section className="works">
      <div className="works-list">
        <AnimatePresence mode="sync" initial={false} custom={direction}>
          <div className="full-screen-work__content">
            <motion.h1
              className="full-screen-work__control"
              onClick={() => paginate(-1)}
            >
              +
            </motion.h1>

            <Link to={`/works/${activeWork.slug}`} className="text">
              <AnimatePresence mode="popLayout">
                <motion.h1 {...anim(SliderAnim.text)} key={activeWork.title} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>
                  {activeWork.title}
                </motion.h1>
              </AnimatePresence>
            </Link>

            <motion.h1
              className="full-screen-work__control"
              onClick={() => paginate(1)}
            >
              +
            </motion.h1>
          </div>

          <motion.div
            className="full-screen-work"
            key={page}
            custom={direction}
            variants={SliderAnim.layer}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img
              src={activeWork.image}
              alt="full-screen-work"
              className={classNames("full-screen-work__image", {
                "full-screen-work__image--hovering": hover
              })}
            />
          </motion.div>
        </AnimatePresence>
        <ul className="works-thumbnail">
          {data.worksList.map((currW, i) => (
            <li key={i} className="works-thumbnail__image-wrapper">
              <img
                src={currW.image}
                alt="thumbnail"
                className={classNames("works-thumbnail__image", {
                  "works-thumbnail__image--active": page === i,
                })}
                onClick={() => paginateThumbnail(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
