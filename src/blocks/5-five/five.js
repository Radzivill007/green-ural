import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'

export default function First({ data }) {
  const bg = convertToBgImage(getImage(data.bg))
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    cssEasy: 'linear',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <BackgroundImage Tag="section" {...bg} className="section_five">
      <div className="container">
        <div className="inner">
          <p>{data.description}</p>
          <h2>{data.title}</h2>
          <Slider {...settings}>
            {data.slider.map((slide, i) => {
              return (
                <div key={i} className="slide">
                  <div className="img-zoom">
                    <GatsbyImage image={getImage(slide.img)} alt={`slider-item-${i}`} style={{ width: '100%' }} />
                  </div>
                  <div className="content">
                    <div>
                      <span>{slide.date}</span>
                    </div>
                    <Link to={slide.href}>
                      <p dangerouslySetInnerHTML={{ __html: slide.title }} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </Slider>
          <div className="button">
            <button>
              <Link to={data.btn.link}>{data.btn.text}</Link>
            </button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
