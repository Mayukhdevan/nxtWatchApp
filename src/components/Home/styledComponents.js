import styled from 'styled-components'

export const HomeContentWrapper = styled.div`
  //   background-color: #f1f5f9;
  background-color: ${({theme}) => theme.body.secondary};
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
  //   border: 1px solid #94a3b8;
  border: none;
  box-shadow: 2px 2px 5px 1px rgb(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  color: #212121;
  border-radius: 15px 0 0 15px;
  //   background-color: #e2e8f0;
  background-color: ${({theme}) => theme.body.soft};
  color: ${({theme}) => theme.color.soft};
  &:focus {
    outline: 1.5px solid #64748b;
    border-right: 1.5px solid #64748b;
  }
`
export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  //   border: 1.5px solid #94a3b8;
  border: none;
  background-color: ${({theme}) => theme.body.soft};
  border-radius: 0 15px 15px 0;
  box-shadow: 2px 2px 5px 1px rgb(0, 0, 0, 0.2);
  &:hover {
    background-color: #64748b;
    cursor: pointer;
  }
`
