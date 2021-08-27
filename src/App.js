import './App.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Theme } from './theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Header from '../src/components/Header'
import { FilterProvider } from '../src/context/contextFilter'
import useThemeStorage from './hooks/useThemeStorage'

function App () {
  const { storageTheme, setStorageTheme } = useThemeStorage('rest-countries-theme')
  const toggle = () => setStorageTheme(storageTheme === 'light' ? 'dark' : 'light')
  return (
    <ThemeProvider theme={Theme[storageTheme]}>
      <GlobalStyle />
      <FilterProvider>
        <Header setTheme={toggle} theme={storageTheme} />
        <Router>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/:countryName' component={Details} />
          </Switch>
        </Router>
      </FilterProvider>
    </ThemeProvider>

  )
}

export default App

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props => props.theme.background};
}
`
