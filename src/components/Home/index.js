import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Layout from '../Layout'
import {
  Paragraph,
  HomeContainer,
  Banner,
  BannerContentWrapper,
  BannerLogo,
  Button,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
} from './styledComponents'
import {LIGHT_LOGO, HOME_API_URL} from '../../utils/constants'
import VideoCardsList from '../VideoCardsList'

const getHomeVideos = async (setVideoList, setErr, searchInput = '') => {
  const jwtToken = Cookies.get('jwt_token')
  const url = HOME_API_URL + searchInput
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }

  const response = await fetch(url, options)
  const data = await response.json()
  if (response.ok) {
    const updatedData = data.videos.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      thumbnailUrl: eachData.thumbnail_url,
      channel: {
        name: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
      },
      viewCount: eachData.view_count,
      publishedAt: eachData.published_at,
    }))
    setVideoList([...updatedData])
  } else {
    setErr({error: true, errMsg: data.error_msg})
  }
}

export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [err, setErr] = useState({error: false, errMsg: ''})
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    getHomeVideos(setVideoList, setErr)
  }, [])

  const handleSearch = () => {
    getHomeVideos(setVideoList, setErr, searchInput)
  }

  return (
    <Layout>
      <div>
        <Banner>
          <BannerContentWrapper>
            <BannerLogo src={LIGHT_LOGO} alt="website logo" />
            <Paragraph>Buy NxtWatch Premium prepaid pans with UPI</Paragraph>
            <Button>GET IT NOW</Button>
          </BannerContentWrapper>
        </Banner>
        <HomeContainer>
          <SearchInputWrapper>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </SearchInputWrapper>
          <VideoCardsList videoList={videoList} />
        </HomeContainer>
      </div>
    </Layout>
  )
}
