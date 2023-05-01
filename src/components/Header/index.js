import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {
  HeaderContainer,
  HeaderLogo,
  UserOptionsWrapper,
  UserLogo,
  LogoutButton,
  ThemeButton,
} from './styledComponents'
import {LIGHT_LOGO, PROFILE_LOGO} from '../../utils/constants'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={LIGHT_LOGO} alt="website logo" />
      <UserOptionsWrapper>
        <ThemeButton data-testid="theme">
          <FaMoon style={{width: '16px', height: '16px'}} />
        </ThemeButton>
        <UserLogo src={PROFILE_LOGO} alt="profile" />
        <LogoutButton>Logout</LogoutButton>
      </UserOptionsWrapper>
    </HeaderContainer>
  )
}
