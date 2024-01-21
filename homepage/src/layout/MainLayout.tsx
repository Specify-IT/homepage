import { useState, type FC, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import media from './media';
import MenuItems from './MenuItems';
import { ReactComponent as EggLogo } from "../assets/images/logo-white.svg";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px/s 1fr;
  grid-template-areas:
    'left right'
    'main main';

  .mobile {
    display: none;
  };

  .desktop {
    display: block;
  };

  ${media.md`
    grid-template-columns: 1fr 1fr;
    background-color: #555;

    .mobile {
      display: block;
    };

    .desktop {
      display: none;
    };
  `};
`;

const Main = styled.div`
  grid-area: main;
  min-height: calc(100vh - 34px);

  background-color: #fff;

  /* ${media.xxl`
    background-color: purple;
  `};

  ${media.xl`
    background-color: pink;
  `};

  ${media.lg`
    background-color: yellow;
  `};
  
  ${media.md`
    background-color: red;
  `};

  ${media.sm`
    background-color: blue;
  `};

  ${media.xs`
    background-color: green;
  `}; */
`;

const MobileMenu = styled.div`
  text-align: right;
  z-index: 1;
  height: 50px;

  top: 0;
  position: sticky;
  background-color: #555;
`;

const Logo = styled.div`
  height: 34px;

  ${media.md`
    height: 50px;
    z-index: 1;
    top: 0;
    position: sticky;
    background-color: #555;
  `};
`;

const DesktopMenu = styled.div`
  height: 34px;
  white-space: nowrap;
`;

const Hamburger = styled.button`
  background-color: #555;
  border: none;
  padding: 10px;
  margin: 0;

  &.active {
    span:nth-child(2) {
      opacity: 0;
    };

    span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
`;

const CompanyLogo = styled(EggLogo)`
  width: 20px;
  height: 32px;

  ${media.md`
    width: 30px;
    height: 50px;
  `};
`;

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [moblieMenuActive, setMoblileMenuActive] = useState<boolean>(false);

  const buttonClick = () => {
    toggleMobileMenu();
  };

  const toggleMobileMenu = () => {
    setMoblileMenuActive(() => !moblieMenuActive);
  };

  return (
    <Layout>
      <Logo>
        <CompanyLogo viewBox='-10 10 45 20' x="50%" y="50%" />
      </Logo>
      <MobileMenu className='mobile'>
        <Hamburger onClick={buttonClick} className={moblieMenuActive?'active':''}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
        <MenuItems isMobile={true} active={moblieMenuActive} menuItemClicked={toggleMobileMenu} />
      </MobileMenu>
      <DesktopMenu className='desktop'>
        <MenuItems />
      </DesktopMenu>
      <Main>
        <Outlet />
      </Main>
    </Layout>
     );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;