import React from 'react'
import { graphql } from 'gatsby'
import First from '../blocks/1-first/first'
import Second from '../blocks/2-second/second'
import Third from '../blocks/3-third/third'
import Five from '../blocks/5-five/five'
import Wrapper from '../components/wrapper'

const Index = ({ data }) => {
  return (
    <Wrapper
      titleOfPage={data.indexMetaJson.title}
      keywordsOfPage={data.indexMetaJson.keywords}
      descriptionOfPage={data.indexMetaJson.description}
    >
      <First data={data.firstJson} />
      <Second data={data.secondJson} />
      <Third data={data.thirdJson} />
      <Five data={data.fiveJson} />
    </Wrapper>
  )
}
export default Index
export const data = graphql`
  query {
    indexMetaJson {
      title
      description
      keywords
    }

    firstJson {
      title
      title2
      description
      btn {
        text
        link
      }
    }

    secondJson {
      items {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    thirdJson {
      bg {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      description
      button
      link
    }

    fiveJson {
      bg {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      description
      slider {
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
        date
        title
        href
      }
      btn {
        text
        link
      }
    }
  }
`
