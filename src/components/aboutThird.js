import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import CheckMark from '../assets/img/check-mark.svg'

const AboutThird = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        bgThird {
          childImageSharp {
            gatsbyImageData
          }
        }
        tasks {
          description
        }
      }
    }
  `)

  const bg = convertToBgImage(getImage(data.aboutJson.bgThird))

  return (
    <BackgroundImage Tag="section" {...bg} className="about-third">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Наши задачи</h3>
            <ul>
              {data.aboutJson.tasks.map((item, i) => {
                return <li key={i}>{item.description}</li>
              })}
            </ul>
          </div>
          <div className="col-6">
            <StaticImage src="../../src/assets/img/about-third-img.jpg" alt="we" className="we" />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default AboutThird
