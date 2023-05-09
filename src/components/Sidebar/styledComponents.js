import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: #7e858e;
  &.active {
    background-color: ${({theme}) => theme.body.active};
    font-weight: 500;
    color: #212121;
  }
  &.active .active-icon {
    color: #ff0000;
  }
`
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 200px;
  padding-top: 3rem;
  background-color: ${({theme}) => theme.body.strong};
  @media (max-width: 767px) {
    transition: transform 0.5s ease-in-out;
    min-width: unset;
    width: 200px;
    position: absolute;
    z-index: 10;
    transform: ${props => !props.navStatus && 'translateX(-100%)'};
  }
`
export const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`
export const Footer = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.color.soft};
`
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
