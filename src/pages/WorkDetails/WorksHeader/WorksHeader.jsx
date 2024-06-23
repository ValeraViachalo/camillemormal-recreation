import React from 'react'
import { Link } from 'react-router-dom'
import "./WorksHeader.scss";

export const WorksHeader = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        Back
      </Link>
    </header>
  )
}
