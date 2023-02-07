import React from 'react'
import { Link } from 'gatsby'
import { Grid } from '@material-ui/core'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

export default function Third({ data }) {
  const image = getImage(data.bg)
  const bg = convertToBgImage(image)
  return (
    <BackgroundImage Tag="section" {...bg} className="section-third">
      <div className="container">
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={5}>
          <div className="image">
            <StaticImage src="../../assets/img/green-line.png" alt={`green-line`} />
          </div>
          <p className="title">{data.title}</p>
          <p className="desc">{data.description} </p>
          <button>
            <Link to={data.link}>{data.button}</Link>
          </button>
        </Grid>
      </div>
    </BackgroundImage>
  )
}
