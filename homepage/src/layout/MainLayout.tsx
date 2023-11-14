import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
  <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='about'>About</Link></li>
    </ul>
    <div>{children || <Outlet />}</div>
  </>);
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;