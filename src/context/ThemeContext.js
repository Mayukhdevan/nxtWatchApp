import {createContext} from 'react'

const ThemeContext = createContext({
  mode: '',
  changeMode: () => {},
})

export default ThemeContext
