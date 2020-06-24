import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

import * as S from '../components/ListWrapper/styles';

interface EdgesProps {
  node: {
    frontmatter: {
      title: string;
      date: string;
      description: string;
      category: string;
      background: string;
    };
    timeToRead: number;
    fields: {
      slug: string;
    };
  };
}

interface BlogListProps {
  data: {
    allMarkdownRemark: {
      edges: EdgesProps[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
  };
}

const BlogList: React.FC<BlogListProps> = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges;

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { title, date, description, category, background },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToread={timeToRead}
              title={title}
              description={description}
            />
          ),
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            category
            background
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
