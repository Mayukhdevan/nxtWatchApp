import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 200px;
  @media (max-width: 767px) {
    transition: transform 0.5s ease-in-out;
    min-width: unset;
    width: 200px;
    position: absolute;
    z-index: 10;
    background-color: lightblue;
    transform: ${props => !props.navStatus && 'translateX(-100%)'};
  }
`
export const NavContainer = styled.ul``
export const NavItem = styled.li``
export const Footer = styled.div``
export const Paragraph = styled.p`
  font-weight: ${props => props.fontWeight || 500};
  color: #475569;
  margin-bottom: 2rem;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
export const SocialIcon = styled.img`
  width: 30px;
  margin-right: 0.5rem;
`
