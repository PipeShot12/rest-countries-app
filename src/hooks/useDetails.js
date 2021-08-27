import { useEffect, useState } from 'react'
const details = (item) => (
  {
    name: item.name,
    nativeName: item.nativeName,
    population: item.population,
    region: item.region,
    subregion: item.subregion,
    capital: item.capital,
    topLevelDomain: item.topLevelDomain?.[0],
    currencies: item.currencies?.map(item => item?.name).join(''),
    languages: item.languages?.map(item => item?.name).join(', '),
    flag: item.flag,
    borders: item.borders
  })

const mapBorderNames = async (item) => {
  const getBorderName = `https://restcountries.eu/rest/v2/alpha/${item}`
  const reqBorderName = await fetch(getBorderName)
  const resBorderName = await reqBorderName.json()
  return resBorderName?.name
}

const useDetails = (countryName) => {
  const [countryFetch, setCountryFetch] = useState({})
  const getCountry = `https://restcountries.eu/rest/v2/name/${countryName}`

  useEffect(() => {
    (async () => {
      const reqCountry = await fetch(getCountry)
      const resCountry = await reqCountry.json()
      setCountryFetch(...resCountry.map(details))
      if (resCountry) {
        const borders = resCountry?.[0]?.borders
        const borderNames = await Promise.all(borders.map(mapBorderNames))
        setCountryFetch(prev => ({ ...prev, borders: borderNames }))
      }
    })()
  }, [getCountry])
  return countryFetch
}
export default useDetails
