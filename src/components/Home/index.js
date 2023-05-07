import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Layout from '../Layout'
import {
  HomeContentWrapper,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
} from './styledComponents'
import {LIGHT_LOGO, HOME_API_URL, STATUS} from '../../utils/constants'
import VideoCardsList from '../VideoCardsList'
import LoaderComp from '../LoaderComp'
import Banner from '../Banner'

const getHomeVideos = async (
  setVideoList,
  setErr,
  setResStatus,
  searchInput = '',
) => {
  setResStatus(STATUS.inProgress)

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
    setResStatus(STATUS.success)
  } else {
    setErr(data.error_msg)
    setResStatus(STATUS.failure)
  }
}

export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [videoList, setVideoList] = useState([])
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [err, setErr] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    getHomeVideos(setVideoList, setErr, setResStatus)
  }, [])

  const handleSearch = () => {
    getHomeVideos(setVideoList, setErr, setResStatus, searchInput)
  }

  const renderVideoCards = () => (
    <VideoCardsList flex="row" homeRoute videoList={videoList} />
  )

  const renderFailureView = () => <h1>Failed</h1>

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
      <HomeContentWrapper>
        <SearchInputWrapper>
          <SearchInput
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>
            <AiOutlineSearch style={{width: '15px', height: '15px'}} />
          </SearchButton>
        </SearchInputWrapper>
        {renderView()}
      </HomeContentWrapper>
    </Layout>
  )
}
