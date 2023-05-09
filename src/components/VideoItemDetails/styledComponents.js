import styled from 'styled-components'

export const VideoItemDetailsBg = styled.div`
  background-color: ${({theme}) => theme.body.primary};
`

export const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
`
export const ParaTitle = styled.p`
  font-size: 1rem;
  color: ${({theme}) => theme.color.primary};
  margin-bottom: 1rem;
`
export const Paragraph = styled.p`
  font-size: ${props => props.size || '1rem'};
  color: ${props => props.color || '#94a3b8'};
  font-weight: ${props => props.weight || 500};
  margin-bottom: ${props => props.mb || '1rem'};
`
export const ControlBtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
export const ControlButton = styled.button`
  background: none;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${props => (props.isActive ? ' #2563eb' : '#64748b')};
`
export const Divider = styled.hr`
  margin-bottom: 2rem;
`
export const ChannelContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`
export const ChannelLogo = styled.img`
  width: 50px;
  align-self: flex-start;
`
export const ChannelTextWrapper = styled.div``
