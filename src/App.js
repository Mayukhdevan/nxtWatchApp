import './App.css'
import {Route, Switch, Redirect, useLocation} from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => {
  const location = useLocation()
  const {pathname} = location
  const showSidebar = pathname !== '/login' && pathname !== '/bad-path'

  return (
    <>
      {showSidebar && <Sidebar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/saved-videos" component={SavedVideos} />
        <Route exact path="/videos/:id" component={VideoItemDetails} />
        <Route exact path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    </>
  )
}

export default App
