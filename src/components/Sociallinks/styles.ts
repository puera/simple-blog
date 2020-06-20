import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinkList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  justify-content: center;
`;

export const SociaLinksItem = styled.li`
  margin-right: 12px;
`;

export const Link = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;
