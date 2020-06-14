import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';
import * as S from './styles';

const Profile: React.FC = () => {
  const query = graphql`
    {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `;
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(query);
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDesription>{description}</S.ProfileDesription>
    </S.ProfileWrapper>
  );
};

export default Profile;
