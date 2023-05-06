import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`
export const HeaderLogo = styled.img`
  width: 100px;
`
export const UserOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const ThemeButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const UserLogo = styled.img`
  width: 20px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  outline: none;
  background-color: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  padding: 0.125rem 0.7rem;
  font-size: 600;
  cursor: pointer;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const LogoutIconBtn = styled.button`
  border: none;
  background: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
export const HamIconBtn = styled(LogoutIconBtn)``
