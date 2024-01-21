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

  ${(props) => {
    if (props.isMobile) {
      return css`
        top: 50px;
        position: fixed;
        left: ${props.active ? '0': '-100%'};
        flex-direction: column;
        background-color: #555;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow:
          0 10px 27px rgba(0, 0, 0, 0.05);
      `;
    }
  }};
`;

type LinksItemProps = {
  isMobile: boolean;
};

const LinksItem = styled.li<LinksItemProps>`
  display: flex;

  a {
    padding: 0.5rem 1rem;
    color: #fff;
    text-decoration: none;
    &:visited {
      color: #fff;
    }
  }

  ${props => props.isMobile ? '' : '&:hover { background-color: #888; }' };
`;

type MenuLinkProps = {
  isMobile: boolean;
};

const MenuLink = styled(Link)<MenuLinkProps>`
  ${(props) => {
    if (props.isMobile) {
      return css`
        width: 100%;
        font-size: 2rem;    
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
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='home' onClick={() => menuItemClicked()}>Home</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='services' onClick={() => menuItemClicked()}>Våra tjänster</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='work' onClick={() => menuItemClicked()}>Jobb</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='contact' onClick={() => menuItemClicked()}>Kontakt</MenuLink></LinksItem>
      <LinksItem isMobile={isMobile}><MenuLink isMobile={isMobile} to='about' onClick={() => menuItemClicked()}>Om oss</MenuLink></LinksItem>          
    </Links>
  )
};

export default MenuItems;