import { useEffect, useState } from 'react'

const useCountries = (filter) => {
  const [countriesFetch, setCountriesFetch] = useState([])
  const all = 'https://restcountries.eu/rest/v2/all'
  const region = `https://restcountries.eu/rest/v2/region/${filter}`
  useEffect(() => {
    fetch(!filter ? all : region)
      .then(res => res.json())
      .then(setCountriesFetch)
  }, [filter, region])
  return countriesFetch
}
export default useCountries
