import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {STATUS, VIDEO_ITEM_URL} from '../../utils/constants'
import {
  PlayerContainer,
  Heading,
  Paragraph,
  ControlButton,
  Divider,
  ChannelContainer,
  ChannelLogo,
  ChannelTextWrapper,
} from './styledComponents'
import Layout from '../Layout'
import LoaderComp from '../LoaderComp'

const getVideoDetails = async (
  params,
  setVideoDetails,
  setResStatus,
  setErr,
) => {
  setResStatus(STATUS.inProgress)

  const jwtToken = Cookies.get('jwt_token')
  const url = VIDEO_ITEM_URL + params.id
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }

  const response = await fetch(url, options)
  const data = await response.json()
  if (response.ok) {
    const videoDetails = {
      id: data?.video_details?.id,
      title: data?.video_details?.title,
      videoUrl: data?.video_details?.video_url,
      thumbnailUrl: data?.video_details?.thumbnail_url,
      channel: {
        name: data?.video_details?.channel?.name,
        profileImageUrl: data?.video_details?.channel?.profile_image_url,
        subscribeCount: data?.video_details?.channel?.subscriber_count,
      },
      viewCount: data?.video_details?.view_count,
      publishedAt: data?.video_details?.published_at,
      description: data?.video_details?.description,
    }

    setResStatus(STATUS.success)
    setVideoDetails(videoDetails)
  } else {
    setResStatus(STATUS.failure)
    setErr(data.error_msg)
  }
}

export default function VideoItemDetails() {
  const [videoDetails, setVideoDetails] = useState({})
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [err, setErr] = useState('')
  const params = useParams()

  useEffect(() => {
    getVideoDetails(params, setVideoDetails, setResStatus, setErr)
  }, [])

  const renderVideoDetails = () => {
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails

    return (
      <>
        <PlayerContainer>
          <ReactPlayer
            width="100%"
            height="100%"
            style={{position: 'absolute', inset: 0}}
            url={videoUrl}
            controls
          />
        </PlayerContainer>
        <div style={{padding: '1rem'}}>
          <Heading>{title}</Heading>
          <Paragraph>
            {viewCount} • {}
          </Paragraph>
        </div>
      </>
    )
  }

  const renderFailureView = () => <h1>Failed</h1>

  const renderView = () => {
    switch (resStatus) {
      case STATUS.inProgress:
        return <LoaderComp />
      case STATUS.failure:
        return renderFailureView()
      default:
        return renderVideoDetails()
    }
  }
  return <Layout>{renderView()}</Layout>
}
