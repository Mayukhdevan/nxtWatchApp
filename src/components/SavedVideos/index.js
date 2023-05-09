import {useState, useContext} from 'react'
import {HiFire} from 'react-icons/hi'
import SavedVideosContext from '../../context/SavedVideosContext'
import Layout from '../Layout'
import VideoCardsList from '../VideoCardsList'
import Banner from '../Banner'
import {
  SavedVideosContainer,
  SavedVideosHeader,
  SavedVideosHeaderLogo,
  SavedVideosHeaderText,
  SavedVideosContentWrapper,
} from './styledComponents'
import NoSavedVideos from '../NoSavedVideos'

export default function Trending() {
  const [showBanner, setShowBanner] = useState(true)
  const {savedVideosList} = useContext(SavedVideosContext)

  const renderVideoCards = () => (
    <VideoCardsList
      flex="column"
      homeRoute={false}
      videoList={savedVideosList}
    />
  )

  return (
    <Layout>
      {showBanner && <Banner setShowBanner={setShowBanner} />}
      <SavedVideosContainer data-testid="savedVideos">
        {savedVideosList.length === 0 ? (
          <NoSavedVideos />
        ) : (
          <>
            <SavedVideosHeader>
              <SavedVideosHeaderLogo>
                <HiFire style={{color: '#ff0b37'}} />
              </SavedVideosHeaderLogo>
              <SavedVideosHeaderText>Saved Videos</SavedVideosHeaderText>
            </SavedVideosHeader>
            <SavedVideosContentWrapper>
              {renderVideoCards()}
            </SavedVideosContentWrapper>
          </>
        )}
      </SavedVideosContainer>
    </Layout>
  )
}
