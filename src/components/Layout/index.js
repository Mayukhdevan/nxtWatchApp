import {useState} from 'react'
import {
  LayoutContainer,
  LayoutWrapper,
  ContentContainer,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

export default function Layout({children}) {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <LayoutContainer>
      <Header toggleNav={setIsNavActive} />
      <LayoutWrapper>
        <Sidebar navStatus={isNavActive} />
        <ContentContainer navStatus={isNavActive}>{children}</ContentContainer>
      </LayoutWrapper>
    </LayoutContainer>
  )
}
