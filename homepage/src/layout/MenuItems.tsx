import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type LinksProps = {
  isMobile: boolean;
  active: boolean;
};

const Links = styled.ol<LinksProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;

  ${(props) => {
    if (props.isMobile) {
      return css`
        top: 64px;
        position: fixed;
        left: ${props.active ? '0': '-100%'};
        flex-direction: column;
        background-color: var(--color-brand-darker);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        align-items: stretch;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.3);
      `;
    }
  }};
`;

type LinksItemProps = {
  isMobile: boolean;
};

const LinksItem = styled.li<LinksItemProps>`
  display: flex;
  height: 100%;
  align-items: center;

  ${props => props.isMobile ? `
    width: 100%;
    height: auto;
  ` : ''};

  a {
    padding: 0 1.25rem;
    height: 100%;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s, background-color 0.2s;
    position: relative;

    &:visited {
      color: rgba(255, 255, 255, 0.75);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 1.25rem;
      right: 1.25rem;
      height: 2px;
      background-color: var(--color-brand-light);
      transform: scaleX(0);
      transition: transform 0.2s ease;
    }
  }

  ${props => props.isMobile ? '' : `
    &:hover a {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.06);
    }
    &:hover a::after {
      transform: scaleX(1);
    }
  `};
`;

type MenuLinkProps = {
  isMobile: boolean;
};

const MenuLink = styled(Link)<MenuLinkProps>`
  ${(props) => {
    if (props.isMobile) {
      return css`
        width: 100%;
        font-size: 0.95rem;
        padding: 0.9rem 1rem !important;
        height: auto !important;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      `;
    }
  }};
`;

type MenuItemsProps = {
  isMobile?: boolean;
  active?: boolean;
  menuItemClicked?: () => void;
};

const MenuItems = ({isMobile = false, active = true, menuItemClicked = () => {}}: MenuItemsProps) => {
  return (
    <Links isMobile={isMobile} active={active}>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='home' onClick={() => menuItemClicked()}>Hem</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='services' onClick={() => menuItemClicked()}>Våra tjänster</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='work' onClick={() => menuItemClicked()}>Jobb</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='contact' onClick={() => menuItemClicked()}>Kontakt</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='about' onClick={() => menuItemClicked()}>Om oss</MenuLink></LinksItem>          
    </Links>
  )
};

export default MenuItems;