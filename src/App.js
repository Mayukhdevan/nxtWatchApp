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

  const updateSavedVideos = videosData => {
    console.log(videosData)
    if (savedVideos.includes(videosData)) {
      setSavedVideos(prevVideos =>
        prevVideos.filter(eachVideo => eachVideo.id !== videosData.id),
      )
    } else {
      setSavedVideos(prevVideos => [...prevVideos, videosData])
    }
  }
  return (
    <SavedVideosContext.Provider
      value={{
        savedVideosList: savedVideos,
        updateSavedVideosList: updateSavedVideos,
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
