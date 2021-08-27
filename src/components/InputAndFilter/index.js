import React from 'react'
import styled from 'styled-components'
import DropMenu from '../DropMenu'
import InputSerach from '../InputSearch'
import mediaQuery from '../../mediaQuery'

export default function InputAndFilter () {
  return (
    <Container>
      <InputSerach />
      <DropMenu />
    </Container>
  )
}
const Container = styled.div`
padding: 1.2em 1.2em;
@media(min-width:${mediaQuery.desktop}){
  padding: 6vh 8vh 0 8vh;
  display: flex;
  justify-content: space-between;
}
@media(min-width:${mediaQuery.laptop}){
  padding: 6vh 8vh 0 8vh;
  display: flex;
  justify-content: space-between;
}
`
