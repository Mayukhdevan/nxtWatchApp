import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SidebarContainer,
  NavContainer,
  NavItem,
  Paragraph,
  SocialIcon,
  Footer,
  Wrapper,
} from './styledComponents'
import {FB_LOGO, TWITTER_LOGO, LINKEDIN_LOGO} from '../../utils/constants'

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NavContainer>
        <Link to="/">
          <NavItem>
            <AiFillHome />
            Home
          </NavItem>
        </Link>
        <Link to="/trending">
          <NavItem>
            <HiFire />
            Trending
          </NavItem>
        </Link>
        <Link to="/gaming">
          <NavItem>
            <SiYoutubegaming />
            Gaming
          </NavItem>
        </Link>
        <Link to="/saved-videos">
          <NavItem>
            <BiListPlus />
            Saved videos
          </NavItem>
        </Link>
      </NavContainer>
      <Footer>
        <Paragraph fontWeight="700">CONTACT US</Paragraph>
        <Wrapper>
          <SocialIcon src={FB_LOGO} alt="facebook logo" />
          <SocialIcon src={TWITTER_LOGO} alt="twitter logo" />
          <SocialIcon src={LINKEDIN_LOGO} alt="linked in logo" />
        </Wrapper>
        <Paragraph>
          Enjoy! Now to see your channels and recommendations
        </Paragraph>
      </Footer>
    </SidebarContainer>
  )
}
