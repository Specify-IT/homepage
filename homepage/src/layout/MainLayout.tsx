import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LeftHeader = styled.div`
  display: inline-block;
  width: 50%;
`;

const RightHeader = styled.nav`
  display: inline-block;
  width: 50%;
`;

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

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
  <>
    <div>
      <LeftHeader></LeftHeader>
      <RightHeader>
        <Links>
          <LinksItem><Link to='home'>Home</Link></LinksItem>
          <LinksItem><Link to='about'>About</Link></LinksItem>
        </Links>
      </RightHeader>
    </div>
    <div>{children || <Outlet />}</div>
  </>);
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;