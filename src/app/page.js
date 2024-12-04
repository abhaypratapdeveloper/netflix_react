import React from 'react'
import Banner from './Components/Banner'
import Card from './Components/Card'
import pages from '@/app/page.module.css'

const page = () => {
  return (
    <>
  <Banner title={"Let's Watch Movie together"} Urlimage={"/Netflix-logo2.jpg"}/>
    <div className={pages.cardflex}>
      <Card text={"ANIHILATION"} image={"/poster1.jpg"}/>
      <Card text={"STRANGER THINGS"} image={"/poster2.webp"}/>
      <Card text={"DAREDEVIL"} image={"/poster3.jpg"}/>
      <Card text={"STRANGER THINGS"} image={"/poster4.webp"}/>
      <Card text={"JESSICA JONES"} image={"/poster5.jpg"}/>
      <Card text={"TITANS"} image={"/poster6.jpg"}/>
      <Card text={"LUCIFER"} image={"/poster7.webp"}/>
      <Card text={"DARK"} image={"/poster8.jpg"}/>
    </div>
    </>
  )
}

export default page
 