import React from 'react'
import Whatsapp from '../assets/img/whatsapp.inline.svg'
import Vk from '../assets/img/vk.inline.svg'
import Instagram from '../assets/img/instagram.inline.svg'
import Facebook from '../assets/img/facebook.inline.svg'
import { graphql, useStaticQuery } from 'gatsby'

export default function Social() {
  const data = useStaticQuery(graphql`
    query {
      configJson {
        instagram
        telegram
        facebook
        whatsapp
        vk
      }
    }
  `)

  return (
    <>
      <a href={data.configJson.instagram}>
        <Instagram />
      </a>
      <a href={data.configJson.facebook}>
        <Facebook />
      </a>
      <a href={data.configJson.whatsapp}>
        <Whatsapp />
      </a>
      <a href={data.configJson.vk}>
        <Vk />
      </a>
    </>
  )
}
