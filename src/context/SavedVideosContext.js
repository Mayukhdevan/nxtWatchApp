import {createContext} from 'react'

const SavedVideosContext = createContext({
  savedVideosList: [],
  updateSavedVideosList: () => {},
})

export default SavedVideosContext
