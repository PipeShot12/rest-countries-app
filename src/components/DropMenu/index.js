import { useState } from 'react'
import styled from 'styled-components'
import { useFilter } from '../../context/contextFilter'
import useClickOutside from '../../hooks/useClickOutside'
import mediaQuery from '../../mediaQuery'
export default function DropMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const { selectedOption, setSelectedOption } = useFilter()
  const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  const nodeRef = useClickOutside(() => setIsOpen(false))

  const onOptionClicked = (value) => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  return (
    <DropDownContainer ref={nodeRef}>
      <DropDownHeader onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen}>
        {selectedOption || 'Filter by Region'}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => {
              return (
                <ListItem
                  active={option === selectedOption}
                  onClick={() => onOptionClicked(option)}
                  key={`${index}-item`}
                  tabIndex={option === selectedOption ? -1 : 0}
                  onKeyPress={() => onOptionClicked(option)}
                >
                  {option}
                </ListItem>
              )
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
const DropDownContainer = styled.div`
  width: 60%;
  position: relative;
@media(min-width:${mediaQuery.desktop}){
  width: 25vh;

}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
  width: 15vh;

}
`

const DropDownHeader = styled.div`
padding: 1.2em 1.5em;
font-family: var(--font);
background-color: ${props => props.theme.elements};
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
margin-bottom: 3%;
font-weight: 600;
font-size: 0.9em;
border-radius: 0.2em 0.2em 0.2em 0.2em;
color: ${props => props.theme.text};
cursor: pointer;
&::after{
    font-family: 'Font Awesome\ 5 Free';
    position: absolute;
    content: ${props => props.isOpen ? "'\f077'" : "'\f078'"};
    top: 35%;
    right: 10%;
    color: ${props => props.theme.text};
    
}
@media(min-width:${mediaQuery.desktop}){
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
margin-bottom: 1.5vh;
font-weight: 600;
font-size: 1.7vh;
&::after{
    top: 2.5vh;
    right: 10%; 
}

}
`
const DropDownListContainer = styled.div``

const DropDownList = styled.ul`
padding: 0;
margin: 0;
width: 100%;
box-sizing: border-box;
box-shadow: 0 0.5em 2em -0.5em rgba(0, 0, 0, 0.2);
position:absolute;
background-color: ${props => props.theme.elements};
width: 100%;

`

const ListItem = styled.li`
list-style: none;
font-weight: 600;
background-color: ${props => props.active && 'rgba(0, 0, 0, 0.1)'};
color: ${props => props.theme.text};
padding: 1em 1.5em;
&:hover{
  background-color: rgba(0, 0, 0, 0.1);
}
cursor: pointer;
&:focus{
  background-color: rgba(0, 0, 0, 0.1);
  border:none;
  outline: none;
}
@media(min-width:${mediaQuery.desktop}){
  font-size: 1.7vh;
}
`
