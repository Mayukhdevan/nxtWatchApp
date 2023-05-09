import styled from 'styled-components'

export const NoSavedContainer = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  background-color: ${({theme}) => theme.body.primary};
`
export const NoSavedImage = styled.img`
  margin-bottom: 1rem;
  width: 250px;
`
export const NoSavedHeading = styled.h1`
  font-size: 1.4rem;
  color: ${({theme}) => theme.color.primary};
`
export const NoSavedPara = styled.p`
  color: ${({theme}) => theme.color.secondary};
  font-weight: 500;
  margin-bottom: 1.5rem;
`
