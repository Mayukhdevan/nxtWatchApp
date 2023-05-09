import {
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedPara,
} from './styledComponents'

export default function NoSavedVideos() {
  return (
    <NoSavedContainer>
      <NoSavedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading>No saved videos found</NoSavedHeading>
      <NoSavedPara>Save your videos by clicking a button</NoSavedPara>
    </NoSavedContainer>
  )
}
