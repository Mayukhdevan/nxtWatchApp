import {VideoList} from './styledComponents'
import VideoCardItem from '../VideoCardItem'

export default function VideoCardsList({videoList, flex, homeRoute}) {
  return (
    <VideoList direction={flex}>
      {videoList.map(eachCard => (
        <VideoCardItem
          key={eachCard.id}
          videoCardItem={eachCard}
          direction={flex}
          homeRoute={homeRoute}
        />
      ))}
    </VideoList>
  )
}
