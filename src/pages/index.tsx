import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PostItem from '../components/PostItem';

interface PostListProps {
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

const IndexPage: React.FC = () => {
  const query = graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

  const { allMarkdownRemark } = useStaticQuery(query);

  const postList = allMarkdownRemark.edges as PostListProps[];

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

export default IndexPage;
