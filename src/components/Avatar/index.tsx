import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

const Avatar: React.FC = () => {
  const query = graphql`
    {
      avatarImage: file(relativePath: { eq: "user-profile.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `;
  const { avatarImage } = useStaticQuery(query);
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
