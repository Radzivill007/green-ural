import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Social from './social'

export default function Footer({ toggler }) {
  const data = useStaticQuery(graphql`
    query {
      configJson {
        phone
        phoneLink
        mail
        mailpr
      }
      footerJson {
        text
        links {
          link
          url
        }
      }
      teamJson {
        items {
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          position
          email
        }
      }
    }
  `)
  return (
    <footer className={toggler ? `footer transform` : `footer`}>
      <div className="container">
        <div className="footer_inner">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <StaticImage src="../assets/img/logo-footer.png" alt={`logo-footer`} />
                <p className="text">{data.footerJson.text}</p>
                <div className="social">
                  <Social />
                </div>
              </div>
              <div className="col-3">
                <h3>контакты</h3>
                <div className="link">
                  <StaticImage src="../assets/img/phone-primary.png" alt={`phone`} />
                  <a href={data.configJson.phoneLink}>{data.configJson.phone}</a>
                </div>
                <div className="link">
                  <StaticImage src="../assets/img/mail-primary.png" alt={`phone`} />
                  <a href={`mailto:${data.configJson.mail}`}>{data.configJson.mail}</a>
                </div>
                <div className="link">
                  <StaticImage src="../assets/img/mail-primary.png" alt={`phone`} />
                  <a href={`mailto:${data.configJson.mailpr}`}>{data.configJson.mailpr}(для СМИ)</a>
                </div>
              </div>
              <div className="col-3">
                <h3>карта сайта</h3>
                {data.footerJson.links.map((link, i) => {
                  return (
                    <div key={i} className="link">
                      <Link to={link.url}>{link.link}</Link>
                    </div>
                  )
                })}
              </div>
              <div className="col-3">
                <h3>адрес</h3>
                <p style={{ paddingBottom: '20px' }}>
                  Индекс 620026, <br />
                  Свердловская область,
                  <br /> г. Екатеринбург, ул. Тверитина 34/5
                </p>
                {/* {data.teamJson.items
                  .map((item, index) => {
                    return (
                      <div key={index} className="team">
                        <div>
                          <GatsbyImage image={getImage(item.img)} alt={`team-${index}`} style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className="content">
                          <p>{item.title}</p>
                          <p dangerouslySetInnerHTML={{ __html: item.position }}></p>
                          <p>{item.email}</p>
                        </div>
                      </div>
                    )
                  })
                  .slice(0, 2)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
