import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

const AboutSecond = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        bgSecond {
          childImageSharp {
            gatsbyImageData
          }
        }
        items {
          description
        }
      }
    }
  `)
  const bg = convertToBgImage(getImage(data.aboutJson.bgSecond))

  return (
    <BackgroundImage Tag="section" {...bg} className="about-second">
      <div className="title">
        <StaticImage src="../../assets/img/green-line.png" alt={`green-line`} />
        <h3>Главные цели</h3>
      </div>
      <div className="container">
        <div className="row">
          {data.aboutJson.items.map((item, i) => {
            return (
              <div key={i} className="col-4 about-content">
                <div>
                  <StaticImage src="../../src/assets/img/block-6-circle.png" alt="round" className="round" />
                  <span>{i + 1}</span>
                </div>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default AboutSecond
