import React from 'react'
import { graphql } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../components/wrapper'

const ProjectPage = ({ data }) => {
  data = data.projectPageJson
  return (
    <Wrapper
      title={data.title}
      titleOfPage={data.titleOfPage}
      keywordsOfPage={data.keywordsOfPage}
      descriptionOfPage={data.descriptionOfPage}
    >
      <section className="project-page">
        <div className="container">
          <div className="title-wrapper">
            <h3>{data.title}</h3>
            <StaticImage src="../../assets/img/green-line.png" alt={`green-line`} />
          </div>
          <p>
            <strong>Цель проекта: </strong>
            {data.target}
          </p>
          <p>
            <strong>{data.ulTitle}</strong>
          </p>
          <ul>
            {data.ul.map((item, index) => {
              return <li key={index}>{item.description}</li>
            })}
          </ul>
          {data.ulTitleSecond ? (
            <p>
              <strong>{data.ulTitleSecond}</strong>
            </p>
          ) : (
            ''
          )}

          {data.ulSecond ? (
            <ul>
              {data.ulSecond.map((item, index) => {
                return <li key={index}>{item.description}</li>
              })}
            </ul>
          ) : (
            ''
          )}
        </div>
      </section>
    </Wrapper>
  )
}

export default ProjectPage

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
