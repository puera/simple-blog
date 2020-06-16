import React from 'react';
import Disqus from 'react-disqus-comments';

import * as S from './styles';

interface CommentsProps {
  url: string;
  title: string;
}

const Comments: React.FC<CommentsProps> = ({ url, title }) => {
  const completeURL = `http://localhost:8000${url}`;
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <Disqus
        shortname="rsouza"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
};

export default Comments;
