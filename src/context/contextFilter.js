import { createContext, useContext, useState } from 'react'

const context = createContext()

export const useFilter = () => {
  return useContext(context)
}

export const FilterProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [allCountries, setAllCountries] = useState([])
  return (
    <context.Provider value={{ selectedOption, setSelectedOption, allCountries, setAllCountries }}>
      {children}
    </context.Provider>
  )
}
