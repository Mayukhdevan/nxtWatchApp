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
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = videoCardItem
  return (
    <VideoCard>
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
    </VideoCard>
  )
}
