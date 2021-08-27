import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useDetails from '../../hooks/useDetails'
import { wrapWord } from '../../helpers/'
import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'

export default function Details () {
  const { countryName } = useParams()
  const history = useHistory()
  const {
    name,
    nativeName,
    flag,
    population,
    currencies,
    capital,
    borders,
    region,
    subregion,
    topLevelDomain,
    languages
  } = useDetails(countryName)
  return (
    <Container>
      <GoBackButton onClick={() => history.goBack()}><i className='fas fa-arrow-left' />&nbsp;&nbsp;Back</GoBackButton>
      <ContainerDetails>
        <img src={flag} alt={name} />
        <ContainerText>
          <div className='section-text-details'>
            <div className='details-1'>
              <h3>{name}</h3>
              <p>Native name: <span>{nativeName}</span></p>
              <p>Population: <span>{population?.toLocaleString()}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Sub Region: <span>{subregion}</span></p>
              <p>Capital: <span>{capital}</span></p>
            </div>
            <div className='details-2'>
              <p>Top Level Domain: <span>{topLevelDomain}</span></p>
              <p>Currencies: <span>{currencies}</span></p>
              <p>languages: <span>{languages}</span></p>
            </div>
          </div>
          <div className='details-3'>
            <h4>Border Countries:</h4>
            {borders?.length > 0
              ? borders.map((item, index) =>
                index < 3 && <BorderButton key={`${item + index}`} title={item} onClick={() => history.push(`/${item.replace(/\s/g, '%20')}`)}>{wrapWord(6, item)}</BorderButton>
              )
              : <p>not found</p>}
          </div>
        </ContainerText>
      </ContainerDetails>
    </Container>
  )
}
const Container = styled.div`
background-color: ${props => props.theme.background};

`
const GoBackButton = styled.button`
font-size: 1em;
padding: 0.8em 2em;
border: none;
outline: none;
margin-left: 2em;
margin-top: 2em;
margin-bottom: 2em;
background-color: ${props => props.theme.elements};
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
color: ${props => props.theme.text};
cursor: pointer;
@media(min-width:${mediaQuery.desktop}){
  padding: 1vh 5vh;
  box-shadow: -0.3vh 1vh 2vh -0.5vh rgba(0, 0, 0, 0.2);
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 8vh;
  font-size: 1.9vh;
  margin-left: 8vh;
  margin-top: 8vh;
}
`
const ContainerDetails = styled.div`
padding: 0.8em 2em;
& > img{
  width: 100%;
  height: 100%;
}
@media(min-width:${mediaQuery.desktop}){
  display: flex;
  padding: 0 8vh;
  & > img{
    width: 37.5vw;
    height: 32.7vh;
    margin: auto 0;
  }
}
`
const ContainerText = styled.div`
padding: 1em 1em;
& h3,h4,p{
  color: ${props => props.theme.text};
  margin: 0;
}
& p {
  font-weight: 600;
  margin:0;
}
& span {
  font-weight: 300;
}
.details-1, .details-2, .details-3{
  margin-bottom: 2em;
}
@media(min-width:${mediaQuery.desktop}){
  padding: 0 0;
  width: 100%;
  margin: auto 0;
  margin-left: 8vh;
  .section-text-details{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .details-3{
    display: flex;
    align-items: center;
  }
  .details-3 > h4{
    font-size: 1.8vh;
  }
  & p {
    font-size: 1.7vh;
    margin-bottom: 1.5vh;
  }
  & h3{
    font-size: 3vh;
    margin-bottom: 5vh;
  }
  & h4{
    font-size: 2.5vh;
  }
  .details-1, .details-2, .details-3{
  margin-bottom: 0;
}
}
`
const BorderButton = styled.button`
font-size: 0.8em;
padding: 0.8em 1.2em;
width: 30%;
margin-left: 3%;
margin-top: 6%;
border: none;
outline: none;
background-color: ${props => props.theme.elements};
box-shadow: 0.5em 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
color: ${props => props.theme.text};
cursor: pointer;
@media(min-width:${mediaQuery.desktop}){
  width: 12vh;
  height: 4vh;
  margin-left: 3%;
  margin-bottom: 0;
  font-size: 1.5vh;
  margin-top: 0;
  box-shadow: -0.3vh 1vh 2vh -0.5vh rgba(0, 0, 0, 0.2);
}
`
