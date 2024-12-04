"use client"
import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const form = () => {
   const[user,setUser]=useState({
      username:"",
      email:"",
      phone:"",
      message:"",
   })
   const [status, setStatus] = useState(null);
   

   function handleChange(e){
      const name=e.target.name;
      const value =e.target.value;

      setUser((prevUser)=>({...prevUser, [name]:value}))
   }

   const handleSubmit= async(e)=>{
    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
         setUser({
             username: "",
             email: "",
             phone: "",
             message: ""
         })
         setStatus('success');
     } else {
         setStatus('error');
     }
        }catch(e){
             console.log(e)
        }
   }
  
  return (
    <div>
      <form action="" className={styles.contact_form} onSubmit={handleSubmit}>
         <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label} id="name-input">
                Enter your name
                <input type="text" placeholder='Enter your name' name="username" id='username' 
                value={user.username} 
                onChange={handleChange}
                required
                
                />
            </label>
         </div>

         <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label} id="mail-input">
                Email<t/>
                <input type="email" placeholder='Enter your email' name="email" id='email' 
                value={user.email}
                onChange={handleChange}
                required
                />
            </label>
         </div>

         <div className={styles.input_field}>
            <label htmlFor="Number" className={styles.label} id="phone-input">
                Phone number
                <input type="number" placeholder='Enter your Phone' name="phone" id='phoneNo' 
                value={user.phone}
                onChange={handleChange}
                required
                
                />
            </label>
         </div>

         <div className={styles.input_field}>
            <label htmlFor="Message" className={styles.label} id="msg-input">
                Message
                <textarea placeholder='Enter your message' name="message" id='message' row={5}
                value={user.message} 
                onChange={handleChange}
                required
                />
            </label>
         </div>
         <div>
         {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
            <button type='submit'className={styles.inp_button}>Send Message</button>
         </div>
         
      </form>
    </div>
  )
}

export default form