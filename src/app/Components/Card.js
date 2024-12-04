import React from 'react'
import Image from 'next/image'
import car from '@/app/Styles/Card.module.css'

const Card = ({text,image}) => {
  return (
    <>
      <div className={car.cd}>
        <Image src={image}
        width={230}
        height={230}
        />
        <h3>{text}</h3>
      </div>
    </>
  )
}

export default Card
