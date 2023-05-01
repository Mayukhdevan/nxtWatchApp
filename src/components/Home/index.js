import {useState, useEffect, useCallback} from 'react'
import Cookies from 'js-cookie'
import Layout from '../Layout'
import {
  Heading,
  Paragraph,
  HomeContainer,
  Banner,
  BannerLogo,
  Button,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
} from './styledComponents'
import {LIGHT_LOGO, HOME_API_URL} from '../../utils/constants'
import VideoCardsList from '../VideoCardsList'

export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [videoList, setVideoList] = useState([])
  const [err, setErr] = useState({error: false, errMsg: ''})

  const getHomeVideos = useCallback(async () => {
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
        publishedAt: eachData.publishedAt,
      }))
      setVideoList([updatedData])
    } else {
      setErr({error: true, errMsg: data.error_msg})
    }
  }, [searchInput])

  useEffect(() => {
    getHomeVideos()
  }, [])

  return (
    <Layout>
      <HomeContainer>
        <Banner>
          <BannerLogo src={LIGHT_LOGO} alt="website logo" />
          <Paragraph>Buy NxtWatch Premium prepaid pans with UPI</Paragraph>
          <Button>GET IT NOW</Button>
        </Banner>
        <SearchInputWrapper>
          <SearchInput
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <SearchButton>Search</SearchButton>
        </SearchInputWrapper>
        <VideoCardsList videoList={videoList} />
      </HomeContainer>
    </Layout>
  )
}
