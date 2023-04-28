import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

export default function ProtectedRoute(props) {
  if (Cookies.get('jwt_token')) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}
