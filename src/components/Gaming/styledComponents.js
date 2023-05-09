import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${({theme}) => theme.body.primary};
`
export const GamingHeader = styled.div`
  padding: 1rem 1rem;
  background-color: ${({theme}) => theme.body.secondary};
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const GamingHeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme}) => theme.body.soft};
  border-radius: 50%;
`
export const GamingHeaderText = styled.h1`
  color: ${({theme}) => theme.color.primary};
  font-size: 1.5rem;
`
export const GamingContentWrapper = styled.div`
  padding: 1rem;
`
