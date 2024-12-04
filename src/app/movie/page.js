import React from 'react'
import head from '@/app/Components/Header'
import style from '@/app/Styles/Common.module.css'
import Moviecard from '../Components/Moviecard'
import mov from "@/app/Styles/Movie.module.css"

const page = async() => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ffa8de65ddmsha649c77254a11bbp1c12d8jsn92a34d90e645',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
 const  response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;
  console.log(main_data);

  return (
    <>
    <div className="container">
   <div className="grid">
   {main_data.map((curr)=>{
      return <Moviecard key={curr.id} {...curr} />;
    })
    }

    </div>   
    </div>
        
    </>
  )
}
export default page
