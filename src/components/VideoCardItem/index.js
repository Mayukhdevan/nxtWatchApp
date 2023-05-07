import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {
  VideoCard,
  VideoLink,
  CardThumbnail,
  CardDetailsWrapper,
  CardLogo,
  CardHeading,
  CardPara,
  TextWrapper,
} from './styledComponents'

export default function VideoCardItem({videoCardItem, direction, homeRoute}) {
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoCardItem
  return (
    <VideoCard direction={direction}>
      <VideoLink to={`/videos/${id}`} direction={direction}>
        <CardThumbnail
          src={thumbnailUrl}
          alt={channel.name}
          direction={direction}
        />
        <CardDetailsWrapper>
          <CardLogo
            src={channel.profileImageUrl}
            alt={channel.name}
            homeRoute={homeRoute}
          />
          <TextWrapper>
            <CardHeading>{title}</CardHeading>
            {homeRoute ? (
              <CardPara>
                {channel.name} • {viewCount} •{' '}
                {formatDistanceToNow(new Date(publishedAt))}
              </CardPara>
            ) : (
              <>
                <CardPara>{channel.name}</CardPara>
                <CardPara>
                  {viewCount} • {formatDistanceToNow(new Date(publishedAt))}
                </CardPara>
              </>
            )}
          </TextWrapper>
        </CardDetailsWrapper>
      </VideoLink>
    </VideoCard>
  )
}
