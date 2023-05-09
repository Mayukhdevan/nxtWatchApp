import {createContext} from 'react'

const SavedVideosContext = createContext({
  savedVideosList: [],
  updateSavedVideosList: () => {},
  likeDislikeList: [],
  handleLikeDislike: () => {},
})

export default SavedVideosContext
