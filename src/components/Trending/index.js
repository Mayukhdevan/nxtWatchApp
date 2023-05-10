import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Layout from '../Layout'
import {STATUS, TRENDING_API_URL} from '../../utils/constants'
import VideoCardsList from '../VideoCardsList'
import LoaderComp from '../LoaderComp'
import Banner from '../Banner'
import {
  TrendingContainer,
  TrendingHeader,
  TrendingHeaderLogo,
  TrendingHeaderText,
  TrendingContentWrapper,
} from './styledComponents'
import FailureView from '../FailureView'
import Header from '../Header'

const getTrendingVideos = async (setVideoList, setResStatus) => {
  setResStatus(STATUS.inProgress)

  const jwtToken = Cookies.get('jwt_token')
  const url = TRENDING_API_URL
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
    setResStatus(STATUS.success)
  } else {
    setResStatus(STATUS.failure)
  }
}

export default function Trending() {
  const [videoList, setVideoList] = useState([])
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    getTrendingVideos(setVideoList, setResStatus)
  }, [])

  const reload = () => getTrendingVideos(setVideoList, setResStatus)

  const renderVideoCards = () => (
    <>
      <TrendingHeader>
        <TrendingHeaderLogo>
          <HiFire style={{color: '#ff0b37'}} />
        </TrendingHeaderLogo>
        <TrendingHeaderText>Trending</TrendingHeaderText>
      </TrendingHeader>
      <TrendingContentWrapper>
        <VideoCardsList flex="column" homeRoute={false} videoList={videoList} />
      </TrendingContentWrapper>
    </>
  )

  const renderFailureView = () => <FailureView retry={reload} />

  const renderView = () => {
    switch (resStatus) {
      case STATUS.inProgress:
        return <LoaderComp />
      case STATUS.failure:
        return renderFailureView()
      default:
        return renderVideoCards()
    }
  }

  return (
    <Layout>
      {showBanner && <Banner setShowBanner={setShowBanner} />}
      <TrendingContainer data-testid="trending">
        {renderView()}
      </TrendingContainer>
    </Layout>
  )
}
