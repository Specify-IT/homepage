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
  grid-template-rows: 64px 1fr;
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
    background-color: var(--color-brand-darker);

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
  min-height: calc(100vh - 64px);
  background-color: var(--color-bg-subtle);
`;

const InnerContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;

  ${media.md`
    padding: 0.75rem;
  `};
`;

const MobileMenu = styled.div`
  text-align: right;
  z-index: 100;
  height: 64px;

  top: 0;
  position: sticky;
  background-color: var(--color-brand-darker);
  box-shadow: 0 2px 16px rgba(30, 19, 51, 0.5);
`;

const Logo = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  background-color: var(--color-brand-darker);
  box-shadow: 0 2px 16px rgba(30, 19, 51, 0.5);

  ${media.md`
    height: 64px;
    z-index: 100;
    top: 0;
    position: sticky;
    background-color: var(--color-brand-darker);
  `};
`;

const DesktopMenu = styled.div`
  height: 64px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5rem;
  background-color: var(--color-brand-darker);
  box-shadow: 0 2px 16px rgba(30, 19, 51, 0.5);
  top: 0;
  position: sticky;
  z-index: 100;
`;

const Hamburger = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 16px;
  margin: 0;
  height: 64px;

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
    background-color: rgba(255, 255, 255, 0.08);
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
  width: 28px;
  height: 44px;

  ${media.md`
    width: 28px;
    height: 44px;
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
        <InnerContent>
          <Outlet />
        </InnerContent>
      </Main>
    </Layout>
     );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;