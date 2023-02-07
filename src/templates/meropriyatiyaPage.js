import React from 'react'
import { graphql } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../components/wrapper'

const MeropriyatiyaPage = ({ data }) => {
  data = data.projectPageJson
  return (
    <Wrapper
      title={data.title}
      titleOfPage={data.titleOfPage}
      keywordsOfPage={data.keywordsOfPage}
      descriptionOfPage={data.descriptionOfPage}
    >
      <section className="project-page">
        <div className="container"></div>
      </section>
    </Wrapper>
  )
}

export default MeropriyatiyaPage

export const query = graphql`
  query ($slug: String) {
    projectPageJson(slug: { eq: $slug }) {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      title
      target
      ulTitle
      ulTitleSecond
      ul {
        description
      }
      ulSecond {
        description
      }
    }
  }
`
