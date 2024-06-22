import { motion } from "framer-motion";
import React from "react";
import LazyLoad from "react-lazyload";

export const Content = ({ url, refCon, lazy = true, ...rest }) => {
  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;
  const isVideo = url.match(/\.(mp4|webm)$/) != null;

  return (
    <>
      {lazy ? (
        <LazyLoad offset={window.innerHeight}>
          {isVideo && (
            <motion.video
              loop
              muted
              autoPlay
              webkit-playsinline="true"
              playsInline
              {...rest}
              ref={refCon && refCon}
            >
              <source src={url} />
            </motion.video>
          )}
          {isImage && (
            <motion.img src={url} ref={refCon && refCon} {...rest} />
          )}
        </LazyLoad>
      ) : (
        <>
          {isVideo && (
            <video
              loop
              muted
              autoPlay
              webkit-playsinline="true"
              playsInline
              {...rest}
              ref={refCon && refCon}
            >
              <source src={url} />
            </video>
          )}
          {isImage && (
            <img src={url} ref={refCon && refCon} {...rest} />
          )}
        </>
      )}
    </>
  );
};
