import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../components/wrapper'

const BlogPage = ({ data }) => {
  data = data.blogPageJson
  return (
    <Wrapper title="Новости" titleOfPage={data.titleOfPage} keywordsOfPage={data.keywordsOfPage} descriptionOfPage={data.descriptionOfPage}>
      <section className="blog-page">
        <div className="blog-container">
          <h3>{data.title}</h3>
          <div className="blog-date">&#9679; Опубликовано: {data.date}</div>
          <div dangerouslySetInnerHTML={{ __html: data.text }} />
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogPage

export const query = graphql`
  query ($slug: String) {
    blogPageJson(slug: { eq: $slug }) {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      img {
        childImageSharp {
          gatsbyImageData
        }
      }
      date
      title
      text
    }
  }
`
