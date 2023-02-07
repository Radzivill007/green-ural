import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Grid } from '@material-ui/core'
import Wrapper from '../../components/wrapper'

const Meropriyatiya = ({ data }) => {
  data = data.meropriyatiyaJson

  const [showInfo, setShowInfo] = React.useState(-1)

  return (
    <Wrapper title="Мероприятия" titleOfPage="Мероприятия" descriptionOfPage="Мероприятия" keywordsOfPage={['Мероприятия']}>
      <section className="blog">
        <div className="container">
          <p style={{ padding: '90px 0px 90px 0px' }}>
            В данной вкладке будет публиковаться информация о проведенных круглых столах с представителями бизнеса, власти и т.д. О создании
            рабочей группы.
          </p>
        </div>
        {/* Страница со всеми мероприятиями. Раскомментировать когда будут добавлены мероприятия в meropriyatiya.json */}
        {/* <Grid container>
          {data.items.map((item, index) => {
            return (
              <Grid key={index} item container md={6} style={{ padding: '0px 20px 0px 20px' }}>
                <div className="wrapper">
                  <div className="img-zoom">
                    <Link to={item.href}>
                      <GatsbyImage image={getImage(item.img)} alt={`blog-${index}`} style={{ width: '100%' }} />
                    </Link>
                  </div>
                  <div className="content">
                    <div>
                      <span>{item.date}</span>
                    </div>
                    <Link to={`/deyatelnost/meropriyatiya/${item.href}`}>
                      <p dangerouslySetInnerHTML={{ __html: item.title }} />
                    </Link>
                  </div>
                </div>
              </Grid>
            )
          })}
        </Grid> */}
      </section>
    </Wrapper>
  )
}

export default Meropriyatiya

export const data = graphql`
  query {
    meropriyatiyaJson {
      titleOfPage
      descriptionOfPage
      keywordsOfPage
      title
      description
      items {
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
        href
        date
        author
      }
    }
  }
`
