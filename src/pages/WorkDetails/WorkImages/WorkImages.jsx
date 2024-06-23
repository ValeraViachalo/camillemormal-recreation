import { DataContext } from "@/helpers/dataHelpers/dataProvider";
import React, { useContext, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./WorkImages.scss";
import { ProgressWorks } from "../ProgressWorks/ProgressWorks";

export default function WorkImages() {
  const { data } = useContext(DataContext);
  const { images: imagesData } = data;

  return (
    <section className="works-images" id="works-images">
      <ProgressWorks />
      {imagesData.map((currArImages, i) => (
        <div className="works-images__images-wrapper" key={i}>
          {currArImages.map((currImage, j) => (
            <div className="works-images__image-wrapper" key={j} id={`img-${i}-${j}`}>
              <LazyLoadImage
                src={currImage}
                alt="works"
                className="works-images__image"
                effect="blur"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
