import {useContext} from 'react'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import {FAILURE_LIGHT_IMG, FAILURE_DARK_IMG} from '../../utils/constants'

export default function FailureView({retry}) {
  const {mode} = useContext(ThemeContext)
  return (
    <FailureContainer>
      <FailureImage
        src={mode === 'light' ? FAILURE_LIGHT_IMG : FAILURE_DARK_IMG}
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
