import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'

export default function Header ({ setTheme, theme }) {
  return (
    <ContainerHeader>
      <h1>Where in the world?</h1>
      <p onClick={setTheme}><i className={theme === 'light' ? 'far fa-moon' : 'far fa-sun'} /> {theme === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
    </ContainerHeader>
  )
}
  <i class='' />
const ContainerHeader = styled.div`
background-color: ${props => props.theme.elements};
width: 100%;
display: flex;
justify-content: space-between;
color: ${props => props.theme.text};
padding: 1.5em 1.5em;
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
z-index:0;
& > h1{
  margin: 0;
  font-size: 0.98em
}
& > p{
  margin: 0;
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
}
@media(min-width:${mediaQuery.desktop}){
  padding: 2.8vh 8vh;  
& > h1{
  margin: 0;
  font-size: 2.2vh
}
& > p{
  margin: 0;
  font-size: 1.8vh;
  font-weight: 600;
  cursor: pointer;
  }
}
`
