import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Grid } from '@material-ui/core'
import Wrapper from '../components/wrapper'

const Blog = ({ data }) => {
  data = data.blogJson

  return (
    <Wrapper
      title={data.titleOfPage}
      titleOfPage={data.titleOfPage}
      descriptionOfPage={data.descriptionOfPage}
      keywordsOfPage={data.keywordsOfPage}
    >
      <section className="blog">
        <div className="container">
          <Grid container>
            {data.items.map((item, index) => {
              return (
                <Grid key={index} item container md={6}>
                  <div className="wrapper">
                    <div className="img-zoom">
                      <Link to={item.href}>
                        <GatsbyImage image={getImage(item.img)} alt={`blog-${index}`} style={{ width: '100%' }} />
                      </Link>
                    </div>
                    <div className="content">
                      <div>
                        <span>{item.date}</span>
                      </div>
                      <Link to={`/blog/${item.href}`}>
                        <p dangerouslySetInnerHTML={{ __html: item.title }} />
                      </Link>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </section>
    </Wrapper>
  )
}

export default Blog

export const data = graphql`
  query {
    blogJson {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      title
      description
      items {
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
        href
        date
        author
      }
    }
  }
`
