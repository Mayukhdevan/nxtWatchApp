import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom'

export default function Layout() {
  const {path} = useRouteMatch()

  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path={path} component={Home} />
        <Route exact path={`${path}trending`}>
          <Trending />
        </Route>
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/saved-videos" component={SavedVideos} />
        <Route exact path="/videos/:id" component={VideoItemDetails} />
        <Redirect to="/bad-path" />
      </Switch>
    </>
  )
}
