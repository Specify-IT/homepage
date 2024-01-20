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

type MenuItemsProps = {
  isMobile?: boolean;
  active?: boolean;
  menuItemClicked?: () => void;
};

const MenuItems = ({isMobile = false, active = true, menuItemClicked = () => {}}: MenuItemsProps) => {
  return (
    <Links isMobile={isMobile} active={active}>
      <LinksItem isMobile={isMobile}><Link to='home' onClick={() => menuItemClicked()}>Home</Link></LinksItem>
      <LinksItem isMobile={isMobile}><Link to='services' onClick={() => menuItemClicked()}>Våra tjänster</Link></LinksItem>
      <LinksItem isMobile={isMobile}><Link to='work' onClick={() => menuItemClicked()}>Jobb</Link></LinksItem>
      <LinksItem isMobile={isMobile}><Link to='contact' onClick={() => menuItemClicked()}>Kontakt</Link></LinksItem>
      <LinksItem isMobile={isMobile}><Link to='about' onClick={() => menuItemClicked()}>Om oss</Link></LinksItem>          
    </Links>
  )
};

export default MenuItems;