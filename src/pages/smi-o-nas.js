import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../components/wrapper'

const SmiONas = ({ data }) => {
  data = data.smiJson

  return (
    <Wrapper title="СМИ о нас" titleOfPage="СМИ о нас" descriptionOfPage="СМИ о нас" keywordsOfPage={['СМИ о нас']}>
      <section className="smi">
        <div className="container">
          <ul>
            {data.items.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </Wrapper>
  )
}

export default SmiONas

export const data = graphql`
  query {
    smiJson {
      items {
        title
        href
      }
    }
  }
`
