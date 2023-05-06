import styled, {css} from 'styled-components'

export const HomeContentWrapper = styled.div`
  border: 2px solid green;
  background-color: #f1f5f9;
  flex-grow: 1;
  padding: 1.5rem;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`

export const Banner = styled.div`
  padding: 0.5rem;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
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

export const SearchInputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1.5px solid #94a3b8;
  width: 100%;
  max-width: 400px;
`
export const SearchButton = styled.button`
  padding: 0.3rem 2rem;
  border: 1.5px solid #94a3b8;
  background-color: #e2e8f0;
`
