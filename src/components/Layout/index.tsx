import React from 'react';
import Sidebar from '../Sidebar';
import MenuBar from '../Menubar';

import * as S from './styles';
import GlobalStyles from '../../styles/global';

const Layout: React.FC = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  );
};

export default Layout;
