import React from 'react'
import Wrapper from '../../components/wrapper'
import { graphql } from 'gatsby'

const Partnery = ({ data }) => {
  data = data.partneryJson
  return (
    <Wrapper title="Партнеры" titleOfPage="Партнеры" descriptionOfPage="Партнеры" keywordsOfPage={['Партнеры']}>
      <section className="partnery">
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

export default Partnery

export const data = graphql`
  query {
    partneryJson {
      items {
        title
        href
      }
    }
  }
`
