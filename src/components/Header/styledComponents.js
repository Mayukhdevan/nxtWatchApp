import styled, {css} from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: ${({theme}) => theme.body.strong};
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
  color: ${({theme}) => theme.color.primary};
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
  color: ${({theme}) => theme.color.primary};
  @media (min-width: 768px) {
    display: none;
  }
`
export const HamIconBtn = styled(LogoutIconBtn)``

export const ModalBody = styled.div`
  padding: 1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 300px;
  height: 180px;
  box-shadow: 2px 2px 8px 8px rgb(0, 0, 0, 0.2);
  background-color: ${({theme}) => theme.body.soft};
`
export const ModalText = styled.p`
  color: ${({theme}) => theme.color.modal};
  font-weight: 500;
`
export const ModalButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
`
export const ModalBtn = styled.button`
  padding: 0.7rem 1.5rem;
  color: white;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  ${props =>
    props.outline &&
    css`
      color: #7e858e;
      background-color: transparent;
      border: 2px solid #7e858e;
    `}
`
