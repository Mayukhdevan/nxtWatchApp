import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding: 1.5rem 1rem;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 195px;
  display: flex;
  justify-content: space-between;
`
export const CloseBannerBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  align-self: flex-start;
  cursor: pointer;
`
export const BannerContentWrapper = styled.div`
  max-width: 300px;
`
export const BannerLogo = styled.img`
  width: 130px;
  margin-bottom: 1rem;
`
export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`
export const Button = styled.button`
  background: none;
  outline: none;
  border: 2px solid #181818;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #181818;
`
