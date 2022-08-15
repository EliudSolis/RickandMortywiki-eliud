import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (url) => {
  const [call, setCall] = useState()

  useEffect(() => {
   axios.get(url)
   .then(res => setCall(res.data))
   .catch(err => console.log(err))
  }, [])

  return call
  
}

export default useFetch