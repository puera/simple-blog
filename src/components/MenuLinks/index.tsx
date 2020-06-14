import React from 'react';

import * as S from './styles';

const MenuLinks: React.FC = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      <S.MenuLinksItem>
        <S.MenuLink to="/" activeClassName="active">
          Home
        </S.MenuLink>
      </S.MenuLinksItem>
      <S.MenuLinksItem>
        <S.MenuLink to="/about" activeClassName="active">
          About
        </S.MenuLink>
      </S.MenuLinksItem>
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
