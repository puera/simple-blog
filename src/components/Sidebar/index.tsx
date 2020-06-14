import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../Sociallinks';
import MenuLinks from '../MenuLinks';

import * as S from './styles';

const Sidebar: React.FC = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
