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
  <BannerContainer>
    <BannerContentWrapper>
      <BannerLogo src={LIGHT_LOGO} alt="website logo" />
      <Paragraph>Buy NxtWatch Premium prepaid pans with UPI</Paragraph>
      <Button>GET IT NOW</Button>
    </BannerContentWrapper>
    <CloseBannerBtn onClick={() => setShowBanner(false)}>
      <AiFillCloseSquare style={{width: '20px', height: '20px'}} />
    </CloseBannerBtn>
  </BannerContainer>
)

export default Banner
