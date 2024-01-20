import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  &.nav-menu {
    position: fixed;
    left: -100%;
    flex-direction: column;
    background-color: #555;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow:
      0 10px 27px rgba(0, 0, 0, 0.05);
    
    &.active {
      left: 0;
    }
  };
`;

const LinksItem = styled.li`
  display: flex;

  a {
    padding: 0.5rem 1rem;
    color: #fff;
    text-decoration: none;
    &:visited {
      color: #fff;
    }
  }

  &:hover {
    background-color: #888;
  }
`;



type MenuItemsProps = {
  isMobile?: boolean;
  active?: boolean;
  menuItemClicked?: () => void;
};

const MenuItems = ({isMobile = false, active = true, menuItemClicked = () => {}}: MenuItemsProps) => {
  return (
    <Links className={`${isMobile?'nav-menu':''}${active?' active':''}` }>
      <LinksItem><Link to='home' onClick={() => menuItemClicked()}>Home</Link></LinksItem>
      <LinksItem><Link to='services' onClick={() => menuItemClicked()}>Våra tjänster</Link></LinksItem>
      <LinksItem><Link to='work' onClick={() => menuItemClicked()}>Jobb</Link></LinksItem>
      <LinksItem><Link to='contact' onClick={() => menuItemClicked()}>Kontakt</Link></LinksItem>
      <LinksItem><Link to='about' onClick={() => menuItemClicked()}>Om oss</Link></LinksItem>          
    </Links>
  )
};

export default MenuItems;