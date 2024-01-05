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

const Menu1 = styled.div`
  ${media.md`
    top: 0;
    position: sticky;
    background-color: orange;
  `};
`;

const Menu2 = styled.div`
  max-height: 34px;
  white-space: nowrap;
`;

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Menu1 className='mobile'>hamburger menu</Menu1>
      <Menu1 className='desktop'></Menu1>
      <Menu2 className='desktop'>
        <Links>
          <LinksItem><Link to='home'>Home</Link></LinksItem>
          <LinksItem><Link to='services'>Våra tjänster</Link></LinksItem>
          <LinksItem><Link to='work'>Jobb</Link></LinksItem>
          <LinksItem><Link to='contact'>Kontakt</Link></LinksItem>
          <LinksItem><Link to='about'>Om oss</Link></LinksItem>          
        </Links>
      </Menu2>
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