import { DataContext } from '@/helpers/dataHelpers/dataProvider';
import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./WorkImages.scss";

export default function WorkImages() {
  const { data } = useContext(DataContext);
  const { images: imagesData } = data;

  return (
    <section className="works-images" id="works-images">
      {imagesData.map((currArImages, i) => (
        <div className="works-images__images-wrapper" key={i}>
          {currArImages.map((currImage, j) => (
            <LazyLoadImage
              src={currImage}
              alt="works"
              className="works-images__image"
              effect="blur"
              key={j}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
