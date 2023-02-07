import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../../components/wrapper'
import AboutFirst from '../../components/aboutFirst'
import { StaticImage } from 'gatsby-plugin-image'
import AboutSecond from '../../components/aboutSecond'
import AboutThird from '../../components/aboutThird'

const OFonde = () => {
  return (
    <Wrapper title="О фонде" titleOfPage="О фонде" descriptionOfPage="О фонде" keywordsOfPage={['О фонде']}>
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
    </Wrapper>
  )
}

export default OFonde
