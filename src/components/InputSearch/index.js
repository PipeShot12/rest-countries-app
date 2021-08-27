import { useState } from 'react'
import styled from 'styled-components'
import { useFilter } from '../../context/contextFilter'
import { wrapWord, replaceWhite } from '../../helpers'
import { useHistory } from 'react-router-dom'

import useClickOutside from '../../hooks/useClickOutside'
import mediaQuery from '../../mediaQuery'

export default function InputSerach () {
  const { setSelectedOption, allCountries } = useFilter()
  const [inputValue, setInputValue] = useState('')
  const nodeRef = useClickOutside(() => setInputValue(''))

  const history = useHistory()

  const handlerChange = (e) => {
    const input = e.target.value
    if (input.length > 0 && input.length < 2) {
      setSelectedOption(null)
    }
    setInputValue(input)
  }
  return (
    <ContainerInput ref={nodeRef}>
      <i className='fas fa-search' />
      <Input placeholder='Search for a county...' onChange={handlerChange} value={inputValue} />
      <ContainerOptions>
        {allCountries.map((item, index) => (
          (item.name.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) === 0 && inputValue.toLocaleLowerCase().length > 1) &&
            <Option
              key={`${item.name}-${index}`}
              tabIndex={0}
              onClick={() => history.push(`/${item.name}`)}
              onKeyPress={() => history.push(`/${item.name}`)}
            >{wrapWord(35, item.name)}
            </Option>
        ))}
      </ContainerOptions>
    </ContainerInput>
  )
}
const ContainerInput = styled.div`
position: relative;
margin-bottom: 10%;
& > i{
  position: absolute;
  top: 25%;
  left: 1em;
  font-size: 1.2em;
  color: ${props => props.theme.textInput};
}
@media(min-width:${mediaQuery.desktop}){
  width: 55vh;
  margin-bottom: 0;
  & > i{
  position: absolute;
  top: 2vh;
  left: 2.2vh;
  font-size: 2.2vh;
  color: ${props => props.theme.textInput};
  }
}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
  width: 45vh;
  margin-bottom: 0;
  & > i{
  position: absolute;
  top: 2vh;
  left: 2.2vh;
  font-size: 2.2vh;
  color: ${props => props.theme.textInput};
  }
}
`
const Input = styled.input.attrs({ type: 'text' })`
border: none;
outline: none;
width: 100%;
padding: 1.3em 4em;
background-color: ${props => props.theme.elements};
color: ${props => props.theme.textInput};
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
font-weight:600;
font-family: var(--font);
border-radius: 0.2em 0.2em 0.2em 0.2em;
margin-bottom: 1em;
&::placeholder{
  color:${props => props.theme.textInput};
  font-weight:600;
  color: ${props => props.theme.textInput};
}
@media(min-width:${mediaQuery.desktop}){
  font-size: 1.55vh;
  margin-bottom: 1.5vh;
}

`
const ContainerOptions = styled.ul`
width: 100%;
z-index: 10;
padding: 0;
margin: 0;
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
border-radius: 0.2em 0.2em 0.2em 0.2em;
position:absolute;
background-color: ${props => props.theme.elements};

`
const Option = styled.li`
background-color: ${props => props.theme.elements};
color: ${props => props.theme.textInput};
list-style: none;
padding: 1em 1em;
font-weight: 600;
color: ${props => props.theme.text};
border-radius: 0.2em 0.2em 0.2em 0.2em;
&:hover{
  background-color: rgba(0, 0, 0, 0.1);
}
&:focus{
background-color: rgba(0, 0, 0, 0.1);
  border:none;
  outline: none;
}
cursor: pointer;
@media(min-width:${mediaQuery.desktop}){
  font-size: 1.82vh;
}
`
