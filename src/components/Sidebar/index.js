import {Link} from 'react-router-dom'
import {
  SidebarContainer,
  NavContainer,
  NavItem,
  Paragraph,
  SocialIcon,
  Footer,
  Wrapper,
} from './styledComponents'

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NavContainer>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/trending">
          <NavItem>Trending</NavItem>
        </Link>
        <Link to="/gaming">
          <NavItem>Gaming</NavItem>
        </Link>
        <Link to="/saved-videos">
          <NavItem>Saved videos</NavItem>
        </Link>
      </NavContainer>
      <Footer>
        <Paragraph>CONTACT US</Paragraph>
        <Wrapper>
          <SocialIcon src="#" alt="facebook logo" />
          <SocialIcon src="#" alt="twitter logo" />
          <SocialIcon src="#" alt="linked in logo" />
        </Wrapper>
        <Paragraph>
          Enjoy! Now to see your channels and recommendations
        </Paragraph>
      </Footer>
    </SidebarContainer>
  )
}
