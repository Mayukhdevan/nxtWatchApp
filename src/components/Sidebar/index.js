import {useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SidebarContainer,
  NavContainer,
  NavItem,
  NavLink,
  Paragraph,
  SocialIcon,
  Footer,
  Wrapper,
} from './styledComponents'
import {
  FB_LOGO,
  TWITTER_LOGO,
  LINKEDIN_LOGO,
  ACTIVE_TAB,
} from '../../utils/constants'

export default function Sidebar({navStatus}) {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.home)

  return (
    <SidebarContainer navStatus={navStatus}>
      <NavContainer>
        <NavLink to="/">
          <NavItem
            isActive={activeTab === ACTIVE_TAB.home}
            onClick={() => setActiveTab(ACTIVE_TAB.home)}
          >
            <AiFillHome />
            Home
          </NavItem>
        </NavLink>
        <NavLink to="/trending">
          <NavItem
            isActive={activeTab === ACTIVE_TAB.trending}
            onClick={() => setActiveTab(ACTIVE_TAB.trending)}
          >
            <HiFire />
            Trending
          </NavItem>
        </NavLink>
        <NavLink to="/gaming">
          <NavItem
            isActive={activeTab === ACTIVE_TAB.gaming}
            onClick={() => setActiveTab(ACTIVE_TAB.gaming)}
          >
            <SiYoutubegaming />
            Gaming
          </NavItem>
        </NavLink>
        <NavLink>
          <NavItem
            to="/saved-videos"
            isActive={activeTab === ACTIVE_TAB.savedVideos}
            onClick={() => setActiveTab(ACTIVE_TAB.savedVideos)}
          >
            <BiListPlus />
            Saved videos
          </NavItem>
        </NavLink>
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
