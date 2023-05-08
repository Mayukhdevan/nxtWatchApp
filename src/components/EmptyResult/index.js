import {
  EmptyResultContainer,
  EmptyResultImage,
  EmptyResultHeading,
  EmptyResultPara,
  EmptyResultBtn,
} from './styledComponents'

export default function EmptyResult({retry}) {
  return (
    <EmptyResultContainer>
      <EmptyResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <EmptyResultHeading>No Search results found</EmptyResultHeading>
      <EmptyResultPara>
        Try different key words or remove search filter
      </EmptyResultPara>
      <EmptyResultBtn onClick={retry}>Retry</EmptyResultBtn>
    </EmptyResultContainer>
  )
}
