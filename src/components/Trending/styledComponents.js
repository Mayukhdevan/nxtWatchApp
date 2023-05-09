import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${({theme}) => theme.body.primary};
`
export const TrendingHeader = styled.div`
  padding: 1rem 1rem;
  background-color: ${({theme}) => theme.body.secondary};
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const TrendingHeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme}) => theme.body.soft};
  border-radius: 50%;
`
export const TrendingHeaderText = styled.h1`
  color: ${({theme}) => theme.color.primary};
  font-size: 1.5rem;
`
export const TrendingContentWrapper = styled.div`
  padding: 1rem;
`
