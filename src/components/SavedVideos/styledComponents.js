import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${({theme}) => theme.body.primary};
`
export const SavedVideosHeader = styled.div`
  padding: 1rem 1rem;
  background-color: ${({theme}) => theme.body.secondary};
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const SavedVideosHeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme}) => theme.body.soft};
  border-radius: 50%;
`
export const SavedVideosHeaderText = styled.h1`
  color: ${({theme}) => theme.color.primary};
  font-size: 1.5rem;
`
export const SavedVideosContentWrapper = styled.div`
  padding: 1rem;
`
