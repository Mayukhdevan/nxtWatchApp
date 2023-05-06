import styled from 'styled-components'

export const LayoutContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const LayoutWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-grow: 1;
  position: relative;
  perspective: 500px;
  background-color: #475569;
`
export const ContentContainer = styled.div`
  width: 100%;
  height: 92vh;
  overflow-y: auto;
  transition: 0.5s ease-in-out;
  @media (max-width: 767px) {
    transform-origin: right;
    transform: ${props => props.navStatus && 'rotateY(-50deg)'};
  }
`
