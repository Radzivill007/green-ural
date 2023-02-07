import React from 'react'
import { Grid } from '@material-ui/core'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
export default function Second({ data }) {
  return (
    <section className="section-second">
      <div className="container">
        <Grid container direction="row" spacing={5}>
          {data.items.map((item, i) => {
            return (
              <Grid direction="row" wrap="nowrap" justifyContent="center" item container md={4} key={i}>
                <Grid item style={{ position: 'relative' }}>
                  <GatsbyImage image={getImage(item.image)} alt={`second-item-${i}`} className="image" />
                  <StaticImage src="../../assets/img/block-2-circle.png" alt={`round-${i}`} className="round" />
                </Grid>
                <Grid item>
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.description} </p>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </section>
  )
}
