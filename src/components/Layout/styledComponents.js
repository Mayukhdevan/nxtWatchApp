import styled from 'styled-components'

export const LayoutContainer = styled.div`
  //   border: 2px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const LayoutWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  perspective: 500px;
  background-color: ${({theme}) => theme.body.soft};
`
export const ContentContainer = styled.div`
  width: 100%;
  height: 92.7vh;
  overflow-y: auto;
  background-color: ${({theme}) => theme.body.primary};
  transition: 0.5s ease-in-out;
  @media (max-width: 767px) {
    transform-origin: right;
    transform: ${props => props.navStatus && 'rotateY(-50deg)'};
  }
`
