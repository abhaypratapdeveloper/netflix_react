import React from 'react'
import style from './Styles/Common.module.css'
import Link from 'next/link'
export default function NotFound(){
    return (
        <>
            <section>
                <div classname={style.aaa}>
                    <h1>404</h1>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">
                        <button>
                            Go to Home Page
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}
