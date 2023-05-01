import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 30%;
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
