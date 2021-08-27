import React from 'react'
import styled from 'styled-components'
import InputAndFilter from '../../components/InputAndFilter'
import useCountries from '../../hooks/useCountries'
import Card from '../../components/Card'
import { useHistory } from 'react-router-dom'
import { useFilter } from '../../context/contextFilter'
import mediaQuery from '../../mediaQuery'

export default function Home () {
  const { selectedOption } = useFilter()
  const countries = useCountries(selectedOption)
  const history = useHistory()
  return (
    <>
      <InputAndFilter />
      <CardList>
        {countries.map((county, index) => (<Card country={county} key={`${county?.name + index}`} onClick={() => history.push(`/${county.name}`)} />))}
      </CardList>
    </>
  )
}
const CardList = styled.div`
padding: 1em 3em;
@media(min-width:${mediaQuery.laptop}){
  grid-template-columns: repeat(3,1fr);
  padding: 5vh 8vh;
  display: grid;
  gap: 5vh;
}
@media(min-width:${mediaQuery.desktop}){
  padding: 5vh 8vh;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 5vh;
}
`
