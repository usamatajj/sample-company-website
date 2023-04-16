import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useContext,
  useState,
} from 'react';
import logo from 'assets/logos/logo.svg';
import avatar from 'assets/images/img_avatar.png';
import {
  HeaderArea,
  NavBar,
  NavBarLogo,
  NavBarControls,
  NavigationLinks,
  CheckLink,
} from './Header.styles';
import { RouterHOCTypes } from 'types';
import { SearchOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import {
  YOUR_GITHUB_PROFILE,
  ADD_GIST,
  PUBLIC_GISTS,
  YOUR_GISTS,
  STARRED_GISTS,
  LOGOUT,
  LOGIN,
  SEARCH_NAME,
  HOME,
  SERVICE_REQUEST_FORM,
  ABOUT_US,
  CONTACT_US,
  DASHBOARD,
} from 'constants/index';
import Button from '../Button/Button';

type NavigationLinkType = {
  id: string;
  path: string;
  title: string;
  width?: string;
  height?: string;
};

const navigationLinks: NavigationLinkType[] = [
  {
    id: '1',
    path: '/home',
    title: 'Home',
    height: '40',
    width: '15',
  },
  {
    id: '2',
    path: '/service_request',
    title: 'Service Request Form',
    height: '40',
    width: '35',
  },
  {
    id: '3',
    path: '/about',
    title: 'About Us',
    height: '40',
    width: '15',
  },
  {
    id: '4',
    path: '/contact',
    title: 'Contact Us',
    height: '40',
    width: '15',
  },
];

const Header: React.FC = () => {
  // States
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <HeaderArea>
        <NavBar>
          <Link to={'/'}>
            <NavBarLogo src={logo} alt="Emumba Logo" />
          </Link>

          <NavBarControls>
            <NavigationLinks>
              {navigationLinks.map((item) => (
                <Button
                  key={item.id}
                  width={item.width}
                  height={item.height}
                  size="large"
                  type="link"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <CheckLink active={item.path === pathname}>
                    {item.title}
                  </CheckLink>
                </Button>
              ))}
            </NavigationLinks>
            <Button size="large" width="100" type="primary" height="45">
              {DASHBOARD}
            </Button>
          </NavBarControls>
        </NavBar>
      </HeaderArea>
      <div className="under-header"></div>
    </>
  );
};
export default Header;
