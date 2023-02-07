import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../../components/wrapper'
import { StaticImage } from 'gatsby-plugin-image'

const UchreditelnyeDokumenty = ({ data }) => {
  data = data.docsJson

  return (
    <Wrapper
      title="Учредительные документы"
      titleOfPage="Учредительные документы"
      descriptionOfPage="Учредительные документы"
      keywordsOfPage={['Учредительные документы']}
    >
      <section className="docs-page">
        <div className="container">
          <div className="row">
            {data.itemsFirst.map((item) => {
              return (
                <div className="col-4 docs-wrapper">
                  <a href={item.href} target="_blank">
                    <StaticImage src="../../assets/img/file.png" alt="" className="" />
                  </a>
                  <div className="doc-name">
                    <p>{item.title}</p>
                    <a href={item.href} target="_blank">
                      Скачать
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

export default UchreditelnyeDokumenty

export const data = graphql`
  query {
    docsJson {
      itemsFirst {
        title
        href
      }
    }
  }
`
