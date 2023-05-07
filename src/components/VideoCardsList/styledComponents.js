import styled from 'styled-components'

export const VideoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: ${props => props.direction};
  }
`
