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
  grid-template-columns: 6fr 6fr;
  grid-template-rows: 50px/s 10fr;
  grid-template-areas:
    'headerLeft headerRight'
    'main main';

  ${media.md`
    grid-template-columns: 0fr 12fr;
    background-color: orange;
  `};
`;

const Main = styled.div`
  grid-area: main;

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
`;

const Menu2 = styled.div`
`;

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Menu1></Menu1>
      <Menu2>
        <Links>
          <LinksItem><Link to='home'>Home</Link></LinksItem>
          <LinksItem><Link to='services'>Våra tjänster</Link></LinksItem>
          <LinksItem><Link to='work'>Jobb</Link></LinksItem>
          <LinksItem><Link to='contact'>Kontakt</Link></LinksItem>
          <LinksItem><Link to='about'>Om oss</Link></LinksItem>          
        </Links>
      </Menu2>
      <Main><Outlet /></Main>
    </Layout>
     );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;