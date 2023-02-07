import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import Seo from './SEO'
import Navbar from './navbar'
import Footer from './footer'

const Wrapper = ({ title, description, titleOfPage, descriptionOfPage, keywordsOfPage, children }) => {
  const data = useStaticQuery(graphql`
    query {
      configJson {
        bg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const [toggler, setToggler] = React.useState(false)
  const bg = convertToBgImage(getImage(data.configJson.bg))
  return (
    <>
      <Seo lang={'ru'} title={titleOfPage} description={descriptionOfPage} keywords={keywordsOfPage} />
      <Navbar toggler={toggler} tog={() => setToggler(!toggler)} close={() => setToggler(false)} />
      <div className={toggler ? `menu show` : `menu`}>
        {title && (
          <BackgroundImage Tag="div" {...bg} className="bg">
            <div className="container">
              <h1>{title}</h1>
              {description && <p>{description}</p>}
            </div>
          </BackgroundImage>
        )}
        {children}
      </div>
      <Footer toggler={toggler} />
    </>
  )
}

export default Wrapper
