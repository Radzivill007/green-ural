import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

const AboutFirst = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        bgFirst {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const bg = convertToBgImage(getImage(data.aboutJson.bgFirst))

  return (
    <>
      <section>
        <BackgroundImage Tag="div" {...bg} className="about-first">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <span>Экологический Фонд «Зелёный Урал»</span>
                <h3>Кто мы такие?</h3>
                <p>
                  Уральская некоммерческая природоохранная организация, реализовывающая проекты по защите окружающей среды и содействию в
                  формировании экологической культуры среди граждан.
                  <br />
                  <br />
                  <strong>Наша миссия:</strong> повышение уровня экологической ответственности органов государственной власти, бизнеса и
                  общества.
                </p>
                <button>
                  <Link to="/contacts">Волонтерство</Link>
                </button>
              </div>
              <div className="col-6">
                <StaticImage src="../assets/img/logo-green.png" alt="" className="logo" />
              </div>
            </div>
          </div>
        </BackgroundImage>
      </section>
    </>
  )
}

export default AboutFirst
