import React from 'react'

const Dynamic = async ({params}) => {
    const id= params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'ffa8de65ddmsha649c77254a11bbp1c12d8jsn92a34d90e645',
    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
  }
};
	const response = await fetch(url, options);
	const result = await response.json();
  const main_data=result[0].details;
  console.log(main_data)
	
  return (
    <div>
      <h2>{title}</h2>
      <p>{synopsis}</p>
      <Image src={curr.jawsummary}/>
    </div>
  )
}

export default Dynamic 
