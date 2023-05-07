import styled, {css} from 'styled-components'

export const HomeContentWrapper = styled.div`
  background-color: #f1f5f9;
  flex-grow: 1;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`
export const SearchInputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1.5px solid #94a3b8;
  width: 100%;
  max-width: 400px;
`
export const SearchButton = styled.button`
  padding: 0.3rem 2rem;
  border: 1.5px solid #94a3b8;
  background-color: #e2e8f0;
`
