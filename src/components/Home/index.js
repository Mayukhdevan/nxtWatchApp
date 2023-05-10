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
import EmptyResult from '../EmptyResult'
import FailureView from '../FailureView'
import Header from '../Header'

const getHomeVideos = async (setVideoList, setResStatus, searchInput = '') => {
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
    setResStatus(STATUS.failure)
  }
}

export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [videoList, setVideoList] = useState([])
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    getHomeVideos(setVideoList, setResStatus)
  }, [])

  const handleSearch = () => {
    getHomeVideos(setVideoList, setResStatus, searchInput)
  }

  const renderVideoCards = () =>
    videoList.length === 0 ? (
      <EmptyResult retry={handleSearch} />
    ) : (
      <VideoCardsList flex="row" homeRoute videoList={videoList} />
    )

  const renderFailureView = () => <FailureView retry={handleSearch} />

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
      <HomeContentWrapper data-testid="home">
        <SearchInputWrapper>
          <SearchInput
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            onKeyPress={e => e.charCode === 13 && handleSearch()}
          />
          <SearchButton data-testid="searchButton" onClick={handleSearch}>
            <AiOutlineSearch style={{width: '15px', height: '15px'}} />
          </SearchButton>
        </SearchInputWrapper>
        {renderView()}
      </HomeContentWrapper>
    </Layout>
  )
}
