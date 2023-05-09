import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Layout from '../Layout'
import {STATUS, GAMING_API_URL} from '../../utils/constants'
import LoaderComp from '../LoaderComp'
import Banner from '../Banner'
import GameCardsList from '../GameCardsList'
import {
  GamingContainer,
  GamingHeader,
  GamingHeaderLogo,
  GamingHeaderText,
  GamingContentWrapper,
} from './styledComponents'
import FailureView from '../FailureView'

const getGamingVideos = async (setGameList, setResStatus) => {
  setResStatus(STATUS.inProgress)

  const jwtToken = Cookies.get('jwt_token')
  const url = GAMING_API_URL
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
      viewCount: eachData.view_count,
    }))
    setGameList([...updatedData])
    setResStatus(STATUS.success)
  } else {
    setResStatus(STATUS.failure)
  }
}

export default function Gaming() {
  const [gameList, setGameList] = useState([])
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    getGamingVideos(setGameList, setResStatus)
  }, [])

  const reload = () => getGamingVideos(setGameList, setResStatus)

  const renderGameCards = () => (
    <>
      <GamingHeader>
        <GamingHeaderLogo>
          <SiYoutubegaming style={{color: '#ff0b37'}} />
        </GamingHeaderLogo>
        <GamingHeaderText>Gaming</GamingHeaderText>
      </GamingHeader>
      <GamingContentWrapper>
        <GameCardsList gameList={gameList} />
      </GamingContentWrapper>
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
        return renderGameCards()
    }
  }

  return (
    <Layout>
      {showBanner && <Banner setShowBanner={setShowBanner} />}
      <GamingContainer data-testid="gaming">{renderView()}</GamingContainer>
    </Layout>
  )
}
