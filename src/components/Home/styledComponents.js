import styled, {css} from 'styled-components'

export const HomeContainer = styled.div`
  border: 2px solid green;
  flex-grow: 1;
  background-color: #f1f5f9;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`

export const Banner = styled.div`
  padding: 0.5rem;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: contain;
  height: 200px;
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

export const SearchInputWrapper = styled.div``
export const SearchInput = styled.input``
export const SearchButton = styled.button``
