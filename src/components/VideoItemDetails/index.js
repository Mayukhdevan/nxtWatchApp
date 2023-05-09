import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiDislike, BiLike, BiListPlus} from 'react-icons/bi'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import SavedVideosContext from '../../context/SavedVideosContext'
import {STATUS, VIDEO_ITEM_URL} from '../../utils/constants'
import {
  VideoItemDetailsBg,
  PlayerContainer,
  ParaTitle,
  Paragraph,
  ControlButton,
  Divider,
  ChannelContainer,
  ChannelLogo,
  ChannelTextWrapper,
  ControlBtnWrapper,
} from './styledComponents'
import Layout from '../Layout'
import LoaderComp from '../LoaderComp'
import FailureView from '../FailureView'

const getVideoDetails = async (id, setVideoDetails, setResStatus) => {
  setResStatus(STATUS.inProgress)

  const jwtToken = Cookies.get('jwt_token')
  const url = VIDEO_ITEM_URL + id
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
      likeDislike: {like: false, dislike: false},
    }

    setVideoDetails(videoDetails)
    setResStatus(STATUS.success)
  } else {
    setResStatus(STATUS.failure)
  }
}

export default function VideoItemDetails() {
  const [videoDetails, setVideoDetails] = useState({})
  const [resStatus, setResStatus] = useState(STATUS.initial)
  const [save, setSave] = useState(false)
  const {
    savedVideosList,
    updateSavedVideosList,
    likeDislikeList,
    handleLikeDislike,
  } = useContext(SavedVideosContext)
  console.log(savedVideosList)
  const params = useParams()
  const videoId = params.id

  useEffect(() => {
    getVideoDetails(videoId, setVideoDetails, setResStatus)
  }, [videoId])

  useEffect(() => {
    const found = savedVideosList.find(item => item.id === videoDetails.id)
    if (found) {
      setSave(true)
    } else {
      setSave(false)
    }
  }, [savedVideosList, videoDetails])

  useEffect(() => {}, [likeDislikeList])

  const handleSave = () => {
    updateSavedVideosList(videoDetails)
  }

  const isLiked = () => {
    if (likeDislikeList.length !== 0) {
      const found = likeDislikeList.find(item => item.id === videoDetails.id)
      if (found) {
        return found.likeDislike.like
      }
    }
    return false
  }

  const isDisLiked = () => {
    if (!likeDislikeList.length !== 0) {
      const found = likeDislikeList.find(item => item.id === videoDetails.id)
      if (found) {
        return found.likeDislike.dislike
      }
    }
    return false
  }

  const renderVideoDetails = () => {
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    // const dateAgo = formatDistanceToNow(new Date(publishedAt), {
    //   addSuffix: true,
    // })

    return (
      <VideoItemDetailsBg data-testid="videoItemDetails">
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
          <ParaTitle>{title}</ParaTitle>
          <Paragraph>
            {viewCount} • {publishedAt}
          </Paragraph>
          <ControlBtnWrapper>
            <ControlButton
              isActive={isLiked()}
              onClick={() => handleLikeDislike(videoDetails, 'like')}
            >
              <BiLike style={{height: '22px', width: '22px'}} />
              Like
            </ControlButton>
            <ControlButton
              isActive={isDisLiked()}
              onClick={() => handleLikeDislike(videoDetails, 'dislike')}
            >
              <BiDislike style={{height: '22px', width: '22px'}} />
              Dislike
            </ControlButton>
            <ControlButton isActive={save} onClick={handleSave}>
              <BiListPlus style={{height: '22px', width: '22px'}} />
              {save ? 'Saved' : 'Save'}
            </ControlButton>
          </ControlBtnWrapper>
          <Divider />
          <ChannelContainer>
            <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
            <ChannelTextWrapper>
              <Paragraph mb="0.5rem" color="#1e293b">
                {channel.name}
              </Paragraph>
              <Paragraph mb="unset">
                {channel.subscribeCount} subscribers
              </Paragraph>
            </ChannelTextWrapper>
          </ChannelContainer>
          <Paragraph color="#64748b">{description}</Paragraph>
        </div>
      </VideoItemDetailsBg>
    )
  }

  const reload = () => getVideoDetails(videoId, setVideoDetails, setResStatus)

  const renderFailureView = () => <FailureView retry={reload} />

  const renderView = () => {
    switch (resStatus) {
      case STATUS.inProgress:
        return <LoaderComp />
      case STATUS.failure:
        return renderFailureView()
      case STATUS.success:
        return renderVideoDetails()
      default:
        return <LoaderComp />
    }
  }
  return <Layout>{renderView()}</Layout>
}
