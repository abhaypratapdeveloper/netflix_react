import React from 'react'
import head from "@/app/Styles/Header.module.css"
import style from "@/app/Styles/Common.module.css"
import Image from 'next/image'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <section className={style.bg}>
        <div className="container">
            <header>
                <nav className={head.nav}>
                    <div className={head.logo}>
                        <Image src="/Netflix.jpg"
                        height={90}
                        width={150}
                        />
                    </div>
                    <Navbar/>
                </nav>
            </header>
        </div>
      </section>
    </>
  )
}
export default Header