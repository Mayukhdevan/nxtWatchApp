import './App.css'
import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
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
import ThemeContext from './context/ThemeContext'
import {light, dark} from './utils/theme'

// Replace your code here
const App = () => {
  const [savedVideos, setSavedVideos] = useState([])
  const [likeDislike, setLikeDislike] = useState([])
  const [currentTheme, setCurrentTheme] = useState('light')

  const updateSavedVideos = videosData => {
    const found = savedVideos.find(eachVideo => eachVideo.id === videosData.id)

    if (found === undefined) {
      setSavedVideos(prevVideos => [...prevVideos, videosData])
    } else {
      setSavedVideos(prevVideos =>
        prevVideos.filter(item => item.id !== videosData.id),
      )
    }
  }

  const onLikeDislike = (video, action) => {
    const likeDetails = video
    if (action === 'like') {
      likeDetails.likeDislike = {
        like: !likeDetails?.likeDislike?.like,
        dislike: false,
      }
    } else {
      likeDetails.likeDislike = {
        like: false,
        dislike: !likeDetails?.likeDislike?.dislike,
      }
    }
    setLikeDislike(prevData => [
      ...prevData.filter(eachItem => eachItem.id !== likeDetails.id),
      likeDetails,
    ])
    // console.log(likeDislike, action)
  }

  const onChangeTheme = () =>
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider
      value={{mode: currentTheme, changeMode: onChangeTheme}}
    >
      <ThemeProvider theme={currentTheme === 'light' ? light : dark}>
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
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/bad-path" component={NotFound} />
            <Redirect to="/bad-path" />
          </Switch>
        </SavedVideosContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
