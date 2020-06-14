import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PostItem from '../components/PostItem';

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
}

const BlogList: React.FC<BlogListProps> = ({ data }) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
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
