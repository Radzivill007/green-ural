import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../../components/wrapper'
import { StaticImage } from 'gatsby-plugin-image'

const DokumentyDlyaVstupleniya = ({ data }) => {
  data = data.docsJson

  return (
    <Wrapper
      title="Документы для вступления"
      titleOfPage="Документы для вступления"
      descriptionOfPage="Документы для вступления"
      keywordsOfPage={['Документы для вступления']}
    >
      <section className="docs-page">
        <div className="container">
          <div className="row">
            {data.itemsSecond.map((item) => {
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

export default DokumentyDlyaVstupleniya

export const data = graphql`
  query {
    docsJson {
      itemsSecond {
        title
        href
      }
    }
  }
`
