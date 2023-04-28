import {
  HeaderContainer,
  HeaderLogo,
  UserOptionsWrapper,
  UserLogo,
  LogoutButton,
  ThemeButton,
} from './styledComponents'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src="#" alt="website logo" />
      <UserOptionsWrapper>
        <ThemeButton data-testid="theme">Theme</ThemeButton>
        <UserLogo src="#" alt="profile" />
        <LogoutButton>Logout</LogoutButton>
      </UserOptionsWrapper>
    </HeaderContainer>
  )
}
