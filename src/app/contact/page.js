import React from 'react'
import Card from '../Components/Card'
import Movies from '../Components/Movies'
import movss from '../Styles/Contact.module.css'
import Form from '../Components/form'

const page = () => {
  return (
    <>
    <h1 id="abc">Contact Us</h1>
    <div className={movss.mv}>
<Movies main={"Email"} det={"Monday to Friday Expected"} text={"response time: 72 hours"} send={"Send Email->"}/>
<Movies main={"Live Chat"} det={"Weekdays : 9AM-- 6PM ET"} text={"Weekends: 9AM-- 5PM ET"} send={"Chat Now->"}/>
<Movies main={"Community Forum"} det={"Monday to Friday Expected"} text={"response time: 72 hours"} send={"Ask the Community->"}/>
</div>
<div className="container">
  <h2>We'd love to hear<span id="def"> from you</span></h2>
<Form/>
</div>
</>
  )
}

export default page
