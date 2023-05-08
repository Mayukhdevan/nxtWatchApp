import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
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

const getGamingVideos = async (setGameList, setErr, setResStatus) => {
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
    setErr(data.error_msg)
    setResStatus(STATUS.failure)
  }
}

export default function Gaming() {
  const [gameList, setGameList] = useState([])
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [err, setErr] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    getGamingVideos(setGameList, setErr, setResStatus)
  }, [])

  const renderGameCards = () => <GameCardsList gameList={gameList} />

  const renderFailureView = () => <h1>Failed</h1>

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
      <GamingContainer>
        <GamingHeader>
          <GamingHeaderLogo>
            <HiFire style={{color: '#ff0b37'}} />
          </GamingHeaderLogo>
          <GamingHeaderText>Gaming</GamingHeaderText>
        </GamingHeader>
        <GamingContentWrapper>{renderView()}</GamingContentWrapper>
      </GamingContainer>
    </Layout>
  )
}
