import {Link} from 'react-router-dom'
import {
  VideoCard,
  CardThumbnail,
  CardDetailsWrapper,
  CardLogo,
  CardHeading,
  CardPara,
  TextWrapper,
} from './styledComponents'

export default function VideoCardItem({videoCardItem}) {
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoCardItem
  return (
    <VideoCard>
      <Link to={`/videos/${id}`}>
        <CardThumbnail src={thumbnailUrl} alt={channel.name} />
        <CardDetailsWrapper>
          <CardLogo src={channel.profileImageUrl} />
          <TextWrapper>
            <CardHeading>{title}</CardHeading>
            <CardPara>
              {channel.name} • {viewCount} • {publishedAt}
            </CardPara>
          </TextWrapper>
        </CardDetailsWrapper>
      </Link>
    </VideoCard>
  )
}
