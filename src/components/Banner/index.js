import {AiFillCloseSquare} from 'react-icons/ai'
import {
  BannerContainer,
  BannerContentWrapper,
  BannerLogo,
  Paragraph,
  Button,
  CloseBannerBtn,
} from './styledComponents'
import {LIGHT_LOGO} from '../../utils/constants'

const Banner = ({setShowBanner}) => (
  <BannerContainer data-testid="banner">
    <BannerContentWrapper>
      <BannerLogo src={LIGHT_LOGO} alt="nxt watch logo" />
      <Paragraph>Buy Nxt Watch Premium prepaid pans with UPI</Paragraph>
      <Button>GET IT NOW</Button>
    </BannerContentWrapper>
    <CloseBannerBtn data-testid="close" onClick={() => setShowBanner(false)}>
      <AiFillCloseSquare style={{width: '20px', height: '20px'}} />
    </CloseBannerBtn>
  </BannerContainer>
)

export default Banner
