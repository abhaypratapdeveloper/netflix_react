import React from 'react'
import Image from 'next/image'
import mov from '@/app/Styles/Moviecard.module.css'
import Link from 'next/link'

const Moviecard = (curr) => {
  const{id,type,title,synopsis} = curr.jawSummary;
  return (
    <>
    <div className={mov.cards}>
      <div className={mov.card}>
        <Image src={curr.jawSummary.backgroundImage.url} alt={title}
        width={100}
        height={100}
        />
        <h2>{title.substring(0,18)}</h2>
        <p>{`${synopsis.substring(0,66)}...`}</p>
        <Link href={`/movie/${id}`}>
          <button>
          Read More
          </button>
          </Link>
      </div>
      </div>
    </>
  )
}
export default Moviecard
