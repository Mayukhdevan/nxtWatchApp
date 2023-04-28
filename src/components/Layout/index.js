import {LayoutContainer, ContentWrapper} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

export default function Layout(props) {
  const {children} = props

  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>
        <Sidebar />
        {children}
      </ContentWrapper>
    </LayoutContainer>
  )
}
