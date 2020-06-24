const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// add the slug to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    });

    createNodeField({
      node,
      name: 'slug',
      value: `/posts/${slug.slice(12)}`
    });
  };
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        node {
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            category
            background
            image
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }

  `).then(response => {
    const posts = response.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(__dirname, 'src', 'templates', 'blog-post.tsx'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(__dirname, 'src', 'templates', 'blog-list.tsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
