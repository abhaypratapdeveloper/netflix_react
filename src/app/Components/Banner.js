import React from 'react'
import ban from '@/app/Styles/Banner.module.css'
import Image from 'next/image'

const Banner = ({title,Urlimage}) => {
    return (
        <>
            <div className={ban.net}>
                <div className={ban.net1}>
                    <h2>{title}</h2>
                    <p>All this is just one click away from you, enjoy your favourite shows from the comfort of your choice.</p>
                </div>
                <div>
                    <Image src={Urlimage}
                        height={400}
                        width={500}
                    />
                </div>
            </div>
        </>
    )
}

export default Banner