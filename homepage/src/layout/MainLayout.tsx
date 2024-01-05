import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import media from './media';

const Links = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: 5rem;
  display: flex;
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
    background-color: orange;

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

  ${media.xxl`
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
  `};
`;

const MobileMenu = styled.div`
  text-align: right;

  top: 0;
  position: sticky;
  background-color: orange;
`;

const Logo = styled.div`
  ${media.md`
    top: 0;
    position: sticky;
    background-color: orange;
  `};
`;

const DesktopMenu = styled.div`
  max-height: 34px;
  white-space: nowrap;
`;

const Hamburger = styled.button`
  background-color: orange;
  border: none;
  padding: 4px;
  margin: 0;
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
`;


interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const buttonClick = () => {
    console.log('hamburger click');
  };

  return (
    <Layout>
      <Logo>Logga</Logo>
      <MobileMenu className='mobile'>
        <Hamburger onClick={buttonClick}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </MobileMenu>
      <DesktopMenu className='desktop'>
        <Links>
          <LinksItem><Link to='home'>Home</Link></LinksItem>
          <LinksItem><Link to='services'>Våra tjänster</Link></LinksItem>
          <LinksItem><Link to='work'>Jobb</Link></LinksItem>
          <LinksItem><Link to='contact'>Kontakt</Link></LinksItem>
          <LinksItem><Link to='about'>Om oss</Link></LinksItem>          
        </Links>
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