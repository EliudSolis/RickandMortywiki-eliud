import { useState, useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import axios from 'axios'
import 'boxicons'
import UpButton from './components/UpButton'


function App() {

  const setRandomNumber = num => {
    return Math.round(Math.random() * num)
  }
  const [id, setId] = useState("")
  const [location, setLocation] = useState()

  const getId = e => {
    e.preventDefault()
    setId(e.target.search.value)
  }

  useEffect(() => {
    let numberLocation
    if (id === "") {
      numberLocation = Math.round(Math.random() * (126 - 1) + 1)

    } else {
      numberLocation = id
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [id])



  console.log(id)

  if (location?.residents.length !== 0) {
    return (
      <div className="App">
        <div className='header'> <div className='header__img'></div> </div>
        <Location location={location} />
        <form className='form' onSubmit={getId}>
          <input type="text" name="" id="search" placeholder='Type an ID between 0 & 126' />
          <button className='form__btn'><i className='bx bx-search-alt' ></i></button>
        </form>
        <div className='card__container'>
          {
            location?.residents.map(e => (
              <ResidentInfo key={e} url={e} />
            ))
          }
        </div>
         <UpButton/>
      </div>

    )
  } else {
    return (
      <div className="App">
        <div className='header'> <div className='header__img'></div></div>
        <Location location={location} />
        <form className='form' onSubmit={getId}>
          <input type="text" name="" id="search" placeholder='Ingresa un ID entre 0 y 126' /> 
          <button className='form__btn'><i className='bx bx-search-alt' ></i>
          </button>
        </form>
        <div className='card__container'>
          <h1 className='textNra'>No residents available</h1>
        </div>
      </div>
    )

  }

}

export default App
