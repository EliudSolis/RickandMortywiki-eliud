import React from 'react'
import useFetch from '../hooks/useFetch'

const ResidentInfo = ({url}) => {

    const  data = useFetch(url)

   console.log(data)

   const deadOrAlive = data =>{
    let obj ={
    }

    if (data?.status == "unknown"){
      obj.color = "gray"
    } else if( data?.status =="Alive"){
      obj.color = "green"
    } else if( data?.status =="Dead"){
      obj.color = "red"
    }

    return obj.color
   }

   const obj = {
    color: deadOrAlive(data)
   }

   

  return (
    <article className='card'>
        <img className='card__img' src={data?.image == "" ? "No image Available" : data?.image}  alt="" />
        <li>Name: {data?.name}</li>
        <li>Status: {data?.status} <i style={obj} className='bx bxs-circle'></i></li>
        <li>Origin: {data?.origin.name}</li>
        <li>Episodes: {data?.episode.length}</li>
    </article>

  )
  }

  


export default ResidentInfo