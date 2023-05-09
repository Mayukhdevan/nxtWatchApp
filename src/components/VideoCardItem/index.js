import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {
  VideoCard,
  VideoLink,
  CardThumbnail,
  CardDetailsWrapper,
  CardLogo,
  Paragraph,
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
          alt="video thumbnail"
          direction={direction}
        />
        <CardDetailsWrapper>
          <CardLogo
            src={channel.profileImageUrl}
            alt="channel logo"
            homeRoute={homeRoute}
          />
          <TextWrapper>
            <Paragraph>{title}</Paragraph>
            {homeRoute ? (
              <CardPara>
                {channel.name} • {viewCount} •{' '}
                {/* {formatDistanceToNow(new Date(publishedAt))} */}
                {publishedAt}
              </CardPara>
            ) : (
              <>
                <CardPara>{channel.name}</CardPara>
                <CardPara>
                  {viewCount} • {publishedAt}
                </CardPara>
              </>
            )}
          </TextWrapper>
        </CardDetailsWrapper>
      </VideoLink>
    </VideoCard>
  )
}
