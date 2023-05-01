import {VideoList} from './styledComponents'
import VideoCardItem from '../VideoCardItem'

export default function VideoCardsList({videoList}) {
  // console.log(videoList)
  return (
    <VideoList>
      {videoList.map(eachCard => (
        <VideoCardItem key={eachCard.id} videoCardItem={eachCard} />
      ))}
    </VideoList>
  )
}
