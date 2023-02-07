import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import { StaticImage } from 'gatsby-plugin-image'
export default function First({ data }) {
  return (
    <section className="section_first" id="first">
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        `)}
        initDelay={2}
        transition={3}
        duration={8}
        images={['first-slide-1.jpg', 'first-slide-2.jpg']}
      >
        {/*блоки на 1 слайде*/}
        <div className="inner">
          <div>
            <StaticImage src="../../assets/img/white-line.png" alt={`white-line`} />
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
          <p>{data.description}</p>
          <div>
            <button>
              <Link to={data.btn.link}>{data.btn.text}</Link>
            </button>
          </div>
        </div>
        {/*блоки на 2 слайде*/}
        <div className="inner">
          <div>
            <StaticImage src="../../assets/img/white-line.png" alt={`white-line`} />
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: data.title2 }} />
          <p>{data.description}</p>
          <div>
            <button>
              <Link to={data.btn.link}>{data.btn.text}</Link>
            </button>
          </div>
        </div>
      </BackgroundSlider>
    </section>
  )
}
