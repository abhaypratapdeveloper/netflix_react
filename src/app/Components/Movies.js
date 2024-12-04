import React from 'react'
import Link from 'next/link'
import movs from '@/app/Styles/Common.module.css'

const Movies = ({main,text,det,send}) => {
  return (
    <>
      <div className="container">
        <div className={movs.mvs}>
            <h3>{main}</h3>
            <h5>{det}</h5>
            <h5>{text}</h5>
            <p>{send}</p>
        </div>
      </div>
    </>
  )
}

export default Movies
