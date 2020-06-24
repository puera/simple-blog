import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

const Avatar: React.FC = () => {
  const query = graphql`
    {
      avatarImage: file(relativePath: { eq: "user-profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;
  const { avatarImage } = useStaticQuery(query);
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
