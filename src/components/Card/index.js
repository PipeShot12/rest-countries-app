import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'
import { wrapWord } from '../../helpers'

export default function Card ({ country, onClick }) {
  const { name, capital, population, flag, region } = country
  return (
    <CardContainer onClick={onClick}>
      <img src={flag} alt={name} />
      <ContainerDetails>
        <h3 title={name}>{wrapWord(20, name)}</h3>
        <p>Population: <span>{population?.toLocaleString()}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </ContainerDetails>
    </CardContainer>
  )
}
const CardContainer = styled.div`
border-radius: 0.5em 0.5em 0.5em 0.5em;
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
margin-top: 8%;
background-color: ${props => props.theme.elements};
& > img{
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 0.5em 0.5em 0em 0em;
}
cursor: pointer;
@media(min-width:${mediaQuery.desktop}){
  margin-top: 0;
  border-radius: 0.9vh 0.9vh 0.9vh 0.9vh;
  & > img{
    border-radius: 0.9vh 0.9vh 0 0 ;
  }
}
`
const ContainerDetails = styled.div`
padding: 1em 1em;
& > h3 , p{
  color: ${props => props.theme.text};
  margin:0;
}
& > p {
  font-weight: 600;
  margin:0;
}
& > p > span {
  font-weight: 300;
}
& > p:last-child{
  margin-bottom: 0.5em;
}
@media(min-width:${mediaQuery.desktop}){
  padding: 1.5vh 1.5vh 0 1.5vh;
  & > p:last-child{
  margin-bottom: 0vh;
  }
  & > h3{
    font-size: 2.2vh;
    margin-bottom: 1.5vh;
  }
  & > p {
    font-size: 1.8vh;
  }
  & > p > span {
    font-size: 1.8vh;
  }

}
`
