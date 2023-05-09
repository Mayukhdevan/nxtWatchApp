import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCard = styled.li`
  width: 250px;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  width: ${props => props.direction === 'column' && '100%'};
`
export const VideoLink = styled(Link)`
  text-decoration: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  ${props =>
    props.direction === 'column' &&
    css`
      @media (min-width: 768px) {
        flex-direction: row;
      }
    `}
`
export const CardThumbnail = styled.img`
  width: 100%;
  ${props =>
    props.direction === 'column' &&
    css`
      @media (min-width: 768px) {
        max-width: 400px;
        margin-bottom: 0;
      }
    `}
`
export const CardDetailsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CardLogo = styled.img`
  align-self: flex-start;
  width: 50px;
  @media (min-width: 768px) {
    display: ${props => !props.homeRoute && 'none'};
  }
`
export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({theme}) => theme.color.primary};
  font-weight: 500;
`
export const CardPara = styled.p`
  color: #94a3b8;
  color: ${({theme}) => theme.color.secondary};
  font-size: 0.9rem;
`
