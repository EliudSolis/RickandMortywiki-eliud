import React from 'react'


const Location = ({location}) => {
 
console.log(location)
 
   
         
 
 
    return (
    <div className='location__data'>
        <li>Name: {location?.name}</li>
        <li>Type: {location?.type}</li>
        <li>Dimension: {location?.dimension}</li>
        <li>Residents: {location?.residents.length}</li>
    </div>
  )
}

export default Location