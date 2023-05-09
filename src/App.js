import './App.css'
import {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import SavedVideosContext from './context/SavedVideosContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
const App = () => {
  const [savedVideos, setSavedVideos] = useState([])
  const [likeDislike, setLikeDislike] = useState([])

  const found = (id, videos) =>
    videos.find(eachVideo => eachVideo.id === savedVideos.id)

  const updateSavedVideos = videosData => {
    const videoFound = found(videosData.id, savedVideos)

    if (videoFound === undefined) {
      setSavedVideos(prevVideos => [...prevVideos, videosData])
    } else {
      setSavedVideos(prevVideos =>
        prevVideos.filter(({id}) => id !== videosData.id),
      )
    }
  }

  const onLikeDislike = (video, action) => {
    const videoFound = found(video.id, likeDislike)
    if (videoFound !== undefined) {
      if (action === 'like') {
        videoFound.likeDislike = {
          like: !videoFound.likeDislike.like,
          dislike: false,
        }
      } else {
        videoFound.likeDislike = {
          like: false,
          dislike: !videoFound.likeDislike.dislike,
        }
      }

      setLikeDislike(prevVideos => [
        ...prevVideos.filter(({id}) => id !== videoFound.id),
        videoFound,
      ])
    } else {
      setLikeDislike(prevVideos => [...prevVideos, videoFound])
    }
  }

  return (
    <SavedVideosContext.Provider
      value={{
        savedVideosList: savedVideos,
        updateSavedVideosList: updateSavedVideos,
        likeDislikeList: likeDislike,
        handleLikeDislike: onLikeDislike,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <Route exact path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    </SavedVideosContext.Provider>
  )
}

export default App
