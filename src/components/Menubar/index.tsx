import React from 'react';
import { FaHome, FaSearch, FaRegLightbulb, FaArrowUp } from 'react-icons/fa';
import { BsGrid3X3 } from 'react-icons/bs';

import * as S from './styles';

const MenuBar: React.FC = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <FaHome />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <FaSearch />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <FaRegLightbulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <BsGrid3X3 />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para Topo">
        <FaArrowUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
);

export default MenuBar;
