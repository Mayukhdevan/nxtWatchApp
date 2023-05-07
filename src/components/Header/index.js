import {useHistory} from 'react-router-dom'
import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {
  HeaderContainer,
  HeaderLogo,
  UserOptionsWrapper,
  UserLogo,
  LogoutButton,
  LogoutIconBtn,
  HamIconBtn,
  ThemeButton,
} from './styledComponents'
import {LIGHT_LOGO, PROFILE_LOGO} from '../../utils/constants'

export default function Header({toggleNav}) {
  const history = useHistory()

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <HeaderContainer>
      <HeaderLogo src={LIGHT_LOGO} alt="website logo" />
      <UserOptionsWrapper>
        <ThemeButton data-testid="theme">
          <FaMoon style={{width: '16px', height: '16px'}} />
        </ThemeButton>
        <UserLogo src={PROFILE_LOGO} alt="profile" />
        <LogoutButton onClick={logout}>Logout</LogoutButton>
        <HamIconBtn onClick={() => toggleNav(prevState => !prevState)}>
          <HiMenu style={{width: '19px', height: '19px'}} />
        </HamIconBtn>
        <LogoutIconBtn onClick={logout}>
          <FiLogOut style={{width: '19px', height: '19px'}} />
        </LogoutIconBtn>
      </UserOptionsWrapper>
    </HeaderContainer>
  )
}
