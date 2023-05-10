import styled, {css} from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.body.primary};
  min-height: 100vh;
`

export const LoginCard = styled.div`
  background-color: ${({theme}) => theme.body.secondary};
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  padding: 2rem 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    padding: 3rem 2rem;
  }
`
export const LoginLogo = styled.img`
  width: 110px;
  margin-bottom: 1rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;

  ${props =>
    props.checkBox &&
    css`
      flex-direction: row;
      width: unset;
      align-self: flex-start;
      align-items: center;
      gap: 0.2rem;
    `}
`

export const Label = styled.label`
  color: ${({theme}) => theme.color.soft};
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: -0.5px;
  &[for='checkbox'] {
    color: #212121;
    font-size: 0.85rem;
    user-select: none;
  }
`

export const Input = styled.input`
  padding: 0.7rem;
  border: 2px solid #e2e8f0;
  border-radius: 5px;
  color: #231f20;
  &::placeholder {
    color: #94a3b8;
  }
  &:focus {
    outline: 1px solid #ff0b37;
    box-shadow: 0 0 10px 1px #ff0b37;
  }
`

export const CheckBox = styled.input.attrs({type: 'CheckBox'})`
  width: 1rem;
  aspect-ratio: 1/1;
`

export const Button = styled.button`
  align-self: stretch;
  background-color: transparent;
  background-image: linear-gradient(to bottom, #ebebeb, #ff0000);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #ffffff;
  column-gap: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 100%;
  font-weight: 700;
  line-height: 24px;
  outline: 2px solid transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: none;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
    0px 2px 2px rgba(81, 41, 10, 0.2);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    position: relative;
    transform: translateY(-3px);
  }

  &:active {
    background: #f3f4f6;
    color: black;
    transform: translateY(3px);
  }

  &:focus {
    background: #f3f4f6;
    color: black;
  }
`

export const ErrorMessage = styled.p`
  align-self: flex-start;
  font-size: 0.7rem;
  font-weight: 500;
  color: #9e0303;
`
