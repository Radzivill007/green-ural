import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Grid } from '@material-ui/core'
import Wrapper from '../../components/wrapper'

const Team = ({ data }) => {
  data = data.teamJson
  return (
    <Wrapper
      title={data.title}
      titleOfPage={data.titleOfPage}
      descriptionOfPage={data.descriptionOfPage}
      keywordsOfPage={data.keywordsOfPage}
    >
      <section className="team-cards">
        <div className="container blog-container">
          <div className="row">
            {data.items.map((item, index) => {
              return (
                <div className="col-4 person-card" key={index}>
                  <GatsbyImage image={getImage(item.img)} alt={`team-${index}`} />
                  <div className="person-info">
                    <h3>{item.href === '' ? <Link>{item.title}</Link> : <Link to={item.href}>{item.title}</Link>}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.position }} />
                    <p>{item.text}</p>
                    <a href={'mailto:' + item.email}>
                      <StaticImage src="../../assets/img/mail-primary.png" alt="" className="img-mail" />
                      {item.email}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Team

export const data = graphql`
  query {
    teamJson {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      title
      items {
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
        text
        position
        email
        href
      }
    }
  }
`
