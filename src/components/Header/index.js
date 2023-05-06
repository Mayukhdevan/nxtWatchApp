import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
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
  return (
    <HeaderContainer>
      <HeaderLogo src={LIGHT_LOGO} alt="website logo" />
      <UserOptionsWrapper>
        <ThemeButton data-testid="theme">
          <FaMoon style={{width: '16px', height: '16px'}} />
        </ThemeButton>
        <UserLogo src={PROFILE_LOGO} alt="profile" />
        <LogoutButton>Logout</LogoutButton>
        <HamIconBtn onClick={() => toggleNav(prevState => !prevState)}>
          <HiMenu style={{width: '19px', height: '19px'}} />
        </HamIconBtn>
        <LogoutIconBtn>
          <FiLogOut style={{width: '19px', height: '19px'}} />
        </LogoutIconBtn>
      </UserOptionsWrapper>
    </HeaderContainer>
  )
}
