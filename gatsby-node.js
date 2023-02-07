exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const blog = await graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "blog" } }) {
        nodes {
          name
        }
      }
    }
  `)

  const project = await graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "project" } }) {
        nodes {
          name
        }
      }
    }
  `)

  const meropriyatiya = await graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "meropriyatiya" } }) {
        nodes {
          name
        }
      }
    }
  `)

  const team = await graphql(`
    {
      allDirectory(filter: { relativeDirectory: { eq: "team" } }) {
        nodes {
          name
        }
      }
    }
  `)

  if (blog.error || project.error || team.error || meropriyatiya.error) {
    console.error('Что-то пошло не так!')
    return
  }

  blog.data.allDirectory.nodes.forEach((page) => {
    let url = page.name
    createPage({
      path: `/blog/${url}`,
      component: require.resolve('./src/templates/blogPage.js'),
      context: {
        slug: page.name
      }
    })
  })

  project.data.allDirectory.nodes.forEach((page) => {
    let url = page.name
    createPage({
      path: `/deyatelnost/proekty/${url}`,
      component: require.resolve('./src/templates/projectPage.js'),
      context: {
        slug: page.name
      }
    })
  })

  meropriyatiya.data.allDirectory.nodes.forEach((page) => {
    let url = page.name
    createPage({
      path: `/deyatelnost/meropriyatiya/${url}`,
      component: require.resolve('./src/templates/meropriyatiyaPage.js'),
      context: {
        slug: page.name
      }
    })
  })

  team.data.allDirectory.nodes.forEach((page) => {
    let url = page.name
    createPage({
      path: `/o-nas/team/${url}`,
      component: require.resolve('./src/templates/teamPage.js'),
      context: {
        slug: page.name
      }
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
      }
    })
  }
}
