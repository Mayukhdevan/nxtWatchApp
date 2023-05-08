import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'

export default function FailureView({retry}) {
  return (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <FailureBtn onClick={retry}>Retry</FailureBtn>
    </FailureContainer>
  )
}
