import React from 'react';
import { AiFillGithub, AiFillFacebook } from 'react-icons/ai';

import * as S from './styles';

const SocialLinks: React.FC = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinkList>
      <S.SociaLinksItem>
        <S.Link
          href="https://github.com/puera"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={30} color="#bbb" />
        </S.Link>
      </S.SociaLinksItem>
      <S.SociaLinksItem>
        <S.Link
          href="https://www.facebook.com/resouzatavares"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook size={30} color="#bbb" />
        </S.Link>
      </S.SociaLinksItem>
    </S.SocialLinkList>
  </S.SocialLinksWrapper>
);

export default SocialLinks;
