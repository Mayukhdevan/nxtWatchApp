import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'
import {NOT_FOUND_LIGHT, NOT_FOUND_DARK} from '../../utils/constants'

export default function NotFound() {
  const {mode} = useContext(ThemeContext)

  return (
    <NotFoundContainer>
      <NotFoundImage
        src={mode === 'light' ? NOT_FOUND_LIGHT : NOT_FOUND_DARK}
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundPara>
        We are sorry, the page you requested could not be found.
      </NotFoundPara>
    </NotFoundContainer>
  )
}
