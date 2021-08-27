import { useEffect, useState } from 'react'
import { useFilter } from '../context/contextFilter'
const useCountries = (filter) => {
  const { setAllCountries } = useFilter()
  const [countriesFetch, setCountriesFetch] = useState([])
  const all = 'https://restcountries.eu/rest/v2/all'
  const region = `https://restcountries.eu/rest/v2/region/${filter}`
  useEffect(() => {
    fetch(!filter ? all : region)
      .then(res => res.json())
      .then(countries => {
        setCountriesFetch(countries)
        if (!filter) {
          setAllCountries(countries)
        }
      })
  }, [filter, region, setAllCountries])
  return countriesFetch
}
export default useCountries
