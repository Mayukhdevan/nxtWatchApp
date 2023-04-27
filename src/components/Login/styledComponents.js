import styled, {css} from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 100vh;
`

export const LoginCard = styled.div`
  background-color: #f9f9f9;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  padding: 2rem 1rem 0 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
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
  gap: 0.5rem;
  width: 100%;

  ${props =>
    props.checkBox &&
    css`
      flex-direction: row;
      width: unset;
      align-self: flex-start;
    `}
`

export const Label = styled.label``

export const Input = styled.input`
  padding: 0.5rem 1rem;
`

export const CheckBox = styled.input.attrs({type: 'CheckBox'})``

export const Button = styled.button`
  align-self: stretch;
  appearance: button;
  background-color: transparent;
  background-image: linear-gradient(to bottom, #ebebeb, #ff0000);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #482307;
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
  // margin-bottom: 0;

  &:active {
    background-color: #f3f4f6;
    box-shadow: -1px 2px 5px rgba(81, 41, 10, 0.15),
      0px 1px 1px rgba(81, 41, 10, 0.15);
    transform: translateY(0.125rem);
  }

  &:focus {
    box-shadow: rgba(72, 35, 7, 0.46) 0 0 0 4px,
      -6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2);
  }
`

export const ErrorMessage = styled.p``
