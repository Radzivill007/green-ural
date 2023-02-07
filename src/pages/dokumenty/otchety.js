import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../../components/wrapper'
import { StaticImage } from 'gatsby-plugin-image'

const Otchety = ({ data }) => {
  data = data.docsJson

  return (
    <Wrapper title="Отчеты" titleOfPage="Отчеты" descriptionOfPage="Отчеты" keywordsOfPage={['Отчеты']}>
      <section className="docs-page">
        <div className="container">
          <p style={{ paddingBottom: '32px' }}>Файлы отсутствуют. Мы работаем над этим.</p>
          {/* Отчеты. Раскомментировать, когда добавите название и путь к файлу в docsJson itemsThird */}
          {/* <div className="row">
            {data.itemsThird.map((item) => {
              return (
                <div className="col-4 docs-wrapper">
                  <a href={item.href} target="_blank">
                    <StaticImage src="../../assets/img/pdf.png" alt="" className="" />
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
          </div> */}
        </div>
      </section>
    </Wrapper>
  )
}

export default Otchety

export const data = graphql`
  query {
    docsJson {
      itemsThird {
        title
        href
      }
    }
  }
`
