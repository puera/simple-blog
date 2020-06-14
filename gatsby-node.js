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
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(response => {
    response.data.allMarkdownRemark.edges.forEach(({ node }) => createPage({
      path: node.fields.slug,
      component: path.resolve(__dirname, 'src', 'templates', 'blog-post.tsx'),
      context: {
        slug: node.fields.slug
      }
    }))
  })
}
