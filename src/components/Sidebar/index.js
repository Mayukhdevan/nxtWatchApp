import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SidebarContainer,
  NavContainer,
  NavItem,
  Nav,
  Paragraph,
  SocialIcon,
  Footer,
  Wrapper,
} from './styledComponents'
import {FB_LOGO, TWITTER_LOGO, LINKEDIN_LOGO} from '../../utils/constants'

export default function Sidebar({navStatus}) {
  return (
    <SidebarContainer navStatus={navStatus}>
      <NavContainer>
        <Nav exact to="/">
          <NavItem>
            <AiFillHome className="active-icon" />
            Home
          </NavItem>
        </Nav>
        <Nav exact to="/trending">
          <NavItem>
            <HiFire className="active-icon" />
            Trending
          </NavItem>
        </Nav>
        <Nav exact to="/gaming">
          <NavItem>
            <SiYoutubegaming className="active-icon" />
            Gaming
          </NavItem>
        </Nav>
        <Nav exact to="/saved-videos">
          <NavItem>
            <BiListPlus className="active-icon" />
            Saved videos
          </NavItem>
        </Nav>
      </NavContainer>
      <Footer>
        <Paragraph fontWeight="700">CONTACT US</Paragraph>
        <Wrapper>
          <SocialIcon src={FB_LOGO} alt="facebook logo" />
          <SocialIcon src={TWITTER_LOGO} alt="twitter logo" />
          <SocialIcon src={LINKEDIN_LOGO} alt="linked in logo" />
        </Wrapper>
        <Paragraph>
          Enjoy! Now to see your channels and recommendations!
        </Paragraph>
      </Footer>
    </SidebarContainer>
  )
}
