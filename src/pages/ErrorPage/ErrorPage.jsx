import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import FullWidthBg from '@/components/FullWidthBg/FullWidthBg'

import './ErrorPage.scss';

export default function ErrorPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <FullWidthBg
      type="video"
      url="https://images.beta.cosmos.so/17de808f-e3ab-46bd-82f4-cde43d7ec60b.mp4"
      classSection="error-page"
    >
      <div className="error-page__content">
        <h1 className="big-text">
          404
        </h1>
        <h1>
          You`re lost, so lets just <Link to="/" className="error-page__link">Go home</Link> 
        </h1>
      </div>
    </FullWidthBg>
    </>
  )
}
