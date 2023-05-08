import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {
  GameCard,
  VideoLink,
  CardThumbnail,
  TextWrapper,
  Paragraph,
  CardPara,
} from './styledComponents'

export default function GameCardItem({gameCardItem}) {
  const {id, title, thumbnailUrl, viewCount} = gameCardItem
  return (
    <GameCard>
      <VideoLink to={`/videos/${id}`}>
        <CardThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <TextWrapper>
          <Paragraph>{title}</Paragraph>
          <CardPara>{viewCount} Watching Worldwide</CardPara>
        </TextWrapper>
      </VideoLink>
    </GameCard>
  )
}
