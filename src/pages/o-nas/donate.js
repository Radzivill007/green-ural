import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../../components/wrapper'

const Donate = ({ data }) => {
  data = data.donateJson

  return (
    <Wrapper title="Пожертвования" titleOfPage="Пожертвования" descriptionOfPage="Пожертвования" keywordsOfPage={['Пожертвования']}>
      <section className="donate">
        <div className="container">
          <h3>{data.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: data.text }}/>
        </div>
      </section>
    </Wrapper>
  )
}

export default Donate

export const data = graphql`
  query {
    donateJson {
      title
      text
    }
  }
`
