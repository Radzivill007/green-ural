import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../components/wrapper'

const TeamPage = ({ data }) => {
  data = data.teamPageJson
  return (
    <Wrapper
      title={data.title}
      titleOfPage={data.titleOfPage}
      keywordsOfPage={data.keywordsOfPage}
      descriptionOfPage={data.descriptionOfPage}
    >
      <section className="team-page">
        <div className="container">
          <div className="row">
            <div className="col-4 wrapper-left">
              <GatsbyImage image={getImage(data.img)} alt={`team-${data.slug}`} className="img-circle" />
              <a href={`mailto:${data.slug}`}>
                <StaticImage src="../../assets/img/mail-primary.png" alt="" className="img-mail" />
                {data.email}
              </a>
            </div>
            <div className="col-8 wrapper-right">
              <h3>{data.name}</h3>
              <p>{data.position}</p>
              <p>Biography</p>
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default TeamPage

export const query = graphql`
  query ($slug: String) {
    teamPageJson(slug: { eq: $slug }) {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      img {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      name
      position
      text
      email
    }
  }
`
