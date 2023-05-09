import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameCard = styled.li`
  margin-top: 1rem;
  width: 150px;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    width: 30%;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const CardThumbnail = styled.img`
  width: 100%;
  flex-shrink: 0;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const Paragraph = styled.p`
  font-size: 1rem;
  color: #231f20;
  font-weight: 500;
`
export const CardPara = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
`
