import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../../components/wrapper'

const Sovet = ({ data }) => {
  data = data.teamJson
  return (
    <Wrapper title="Совет" titleOfPage="Совет" descriptionOfPage="Совет" keywordsOfPage={['Совет']}>
      <section className="team-cards">
        <div className="container">
          <p style={{ paddingBottom: '32px' }}>Информация дополняется. (* Совет мы сформируем к маю 2022 года)</p>
          {/* Блок с советом фонда, раскомментировать когда захотите добавить членов совета.*/}
          {/* <div className="row">
            {data.itemsSecond.map((item, index) => {
              return (
                <div className="col-4 person-card" key={index}>
                  <GatsbyImage image={getImage(item.img)} alt={`team-${index}`} />
                  <div className="person-info">
                    <h3>
                      <Link to={item.href}>{item.title}</Link>
                    </h3>
                    <div />
                    <p dangerouslySetInnerHTML={{ __html: item.position }} />
                    <p>{item.text}</p>
                    <a href={'mailto:' + item.email}>
                      <StaticImage src="../../assets/img/mail-primary.png" alt="" className="img-mail" />
                      {item.email}
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

export default Sovet

export const data = graphql`
  query {
    teamJson {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      title
      itemsSecond {
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
        text
        position
        email
        href
      }
    }
  }
`
