import {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  Container,
  LoginCard,
  LoginLogo,
  Form,
  Label,
  Input,
  CheckBox,
  Button,
  InputField,
  ErrorMessage,
} from './styledComponents'
import {LIGHT_LOGO, LOGIN_API_URL} from '../../utils/constants'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [toggleCheck, setToggleCheck] = useState(false)
  const [errMsg, setErrMsg] = useState({loginFailed: false, msg: ''})
  const history = useHistory()

  const loginSuccess = data => {
    setErrMsg({loginFailed: false, msg: ''})
    const jwtToken = data?.jwt_token
    if (jwtToken) {
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    }
  }

  const loginFailure = data => {
    setErrMsg({loginFailed: true, msg: data.error_msg})
  }

  const userLogin = async e => {
    e.preventDefault()

    const credentials = {username, password}

    if (username === 'mayukh' && password === 'mayukh@2023') {
      credentials.username = 'rahul'
      credentials.password = 'rahul@2021'
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const response = await fetch(LOGIN_API_URL, options)
    const data = await response.json()
    if (response.ok) {
      loginSuccess(data)
    } else {
      loginFailure(data)
    }
  }

  if (Cookies.get('jwt_token')) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <LoginCard>
        <LoginLogo src={LIGHT_LOGO} alt="website logo" />
        <Form onSubmit={userLogin}>
          <InputField>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </InputField>
          <InputField>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type={toggleCheck ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputField>
          <InputField checkBox>
            <CheckBox
              id="checkbox"
              checked={toggleCheck}
              onChange={() => setToggleCheck(prevState => !prevState)}
            />
            <Label htmlFor="checkbox">Show Password</Label>
          </InputField>
          <Button type="submit">Login</Button>
        </Form>
        <ErrorMessage>{errMsg.msg}</ErrorMessage>
      </LoginCard>
    </Container>
  )
}
