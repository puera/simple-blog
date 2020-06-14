import React from 'react';

import * as S from './styles';

const PostItem: React.FC = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>13 de junho de 2020 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Teste de post :D</S.PostItemTitle>
        <S.PostItemDescription>
          Teste de descrição do post
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

export default PostItem;
