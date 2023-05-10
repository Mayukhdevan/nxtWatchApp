import {useHistory, Link} from 'react-router-dom'
import {useContext} from 'react'
import Popup from 'reactjs-popup'
import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  HeaderContainer,
  HeaderLogo,
  UserOptionsWrapper,
  UserLogo,
  LogoutButton,
  LogoutIconBtn,
  HamIconBtn,
  ThemeButton,
  ModalBody,
  ModalText,
  ModalButtonsWrapper,
  ModalBtn,
} from './styledComponents'
import {LIGHT_LOGO, PROFILE_LOGO, DARK_LOGO} from '../../utils/constants'

export default function Header({toggleNav}) {
  const {mode, changeMode} = useContext(ThemeContext)
  const history = useHistory()

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo
          src={mode === 'light' ? LIGHT_LOGO : DARK_LOGO}
          alt="website logo"
        />
      </Link>
      <UserOptionsWrapper>
        <ThemeButton data-testid="theme" onClick={changeMode}>
          {mode === 'light' ? (
            <FaMoon style={{width: '16px', height: '16px'}} />
          ) : (
            <BiSun style={{width: '16px', height: '16px'}} />
          )}
        </ThemeButton>
        <UserLogo src={PROFILE_LOGO} alt="profile" />
        <Popup trigger={<LogoutButton>Logout</LogoutButton>} modal>
          {close => (
            <ModalBody>
              <ModalText>Are you sure, you want to logout</ModalText>
              <ModalButtonsWrapper>
                <ModalBtn outline onClick={close}>
                  Cancel
                </ModalBtn>
                <ModalBtn onClick={logout}>Confirm</ModalBtn>
              </ModalButtonsWrapper>
            </ModalBody>
          )}
        </Popup>
        <HamIconBtn onClick={() => toggleNav(prevState => !prevState)}>
          <HiMenu style={{width: '19px', height: '19px'}} />
        </HamIconBtn>
        <Popup
          trigger={
            <LogoutIconBtn>
              <FiLogOut style={{width: '19px', height: '19px'}} />
            </LogoutIconBtn>
          }
          modal
        >
          {close => (
            <ModalBody>
              <ModalText>Are you sure, you want to logout</ModalText>
              <ModalButtonsWrapper>
                <ModalBtn outline onClick={close}>
                  Cancel
                </ModalBtn>
                <ModalBtn onClick={logout}>Confirm</ModalBtn>
              </ModalButtonsWrapper>
            </ModalBody>
          )}
        </Popup>
      </UserOptionsWrapper>
    </HeaderContainer>
  )
}
