import React from 'react'
import { Box } from '@material-ui/core'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Social from './social'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export default function Navbar({ toggler, tog, close }) {
  const data = useStaticQuery(graphql`
    query {
      configJson {
        phone
        phoneLink
      }
      allMenuJson {
        nodes {
          name
          url
          items {
            name
            url
          }
        }
      }
    }
  `)
  const small = typeof window !== `undefined` ? window.matchMedia('(max-width:960px)').matches : null

  const [menuIndex, setMenuIndex] = React.useState(-1)

  if (typeof window !== `undefined` && typeof document !== `undefined`) {
    window.onscroll = function () {
      if (window.scrollY >= 250) {
        if (window.matchMedia('(max-width:960px)').matches) {
          document.getElementById('nav-mob').classList.add(`fixed`)
        } else {
          document.getElementById('navbar').classList.add(`fixed`)
        }
      } else {
        if (window.matchMedia('(max-width:960px)').matches) {
          document.getElementById('nav-mob').classList.remove(`fixed`)
        } else {
          document.getElementById('navbar').classList.remove(`fixed`)
        }
      }
    }
  }
  return (
    <nav>
      <div className="navbar_info">
        <div className="container">
          <div className="inner">
            <div className="left">
              <div className="social">
                <Social />
              </div>
              <div>
                <a href={data.configJson.phoneLink}>{data.configJson.phone}</a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <ClickAwayListener onClickAway={close}>
        <Box style={{ position: 'relative' }}>
          <div id="nav-mob" className={toggler ? `navbar_logoBlock transform` : `navbar_logoBlock`}>
            <div className="container">
              <div className="inner">
                <div className="left">
                  <div>
                    <Link to="/">
                      <StaticImage src={`../assets/img/logo2.png`} alt={`logo-mobile`} className="logo-mob" />
                      <StaticImage src="../assets/img/logo.png" width={183} height={45} alt={`logo`} className="logo" />
                    </Link>
                  </div>
                  <button
                    className={toggler ? `navbar_toggler open` : `navbar_toggler`}
                    style={toggler ? { display: 'none' } : null}
                    onClick={tog}
                  >
                    <span />
                  </button>
                </div>
                <div className="right">
                  <div className="item">
                    <p>20000</p>
                    <p>Насаждений спасено</p>
                  </div>
                  <div className="item">
                    <p>30К Тонн</p>
                    <p>Воды очищено</p>
                  </div>
                  <div className="item">
                    <p>100 Уральских</p>
                    <p>Видов животных защищено</p>
                  </div>
                  <button>
                    <Link to="/o-nas/donate">ПОЖЕРТВОВАТЬ</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="navbar" className={toggler ? `navbar_navig show` : `navbar_navig`}>
            <div className="container">
              <div className="inner">
                <button className={toggler ? `navbar_toggler alt open` : `navbar_toggler alt`} onClick={tog}>
                  <span />
                </button>
                {data.allMenuJson.nodes.map((item, index) => {
                  if (Array.isArray(item.items)) {
                    return (
                      <a
                        key={`dropdown-menu-${index}`}
                        onClick={() => small && setMenuIndex(menuIndex === index ? -1 : index)}
                        onMouseEnter={() => !small && setMenuIndex(index)}
                        onMouseLeave={() => !small && setMenuIndex(-1)}
                        className={typeof window !== `undefined` && '/' + window.location.pathname.split('/')[1] === item.url && `active`}
                      >
                        <p className={menuIndex === index ? null : `menu-drp`}>{item.name}</p>
                        <div className={menuIndex === index ? `dropdown show` : `dropdown`}>
                          {item.items.map((drpdwnItem, i) => {
                            return (
                              <div key={i}>
                                <Link to={`${item.url}${drpdwnItem.url}`}>{drpdwnItem.name}</Link>
                              </div>
                            )
                          })}
                        </div>
                      </a>
                    )
                  } else {
                    return (
                      <Link
                        key={`menu-${index}`}
                        to={item.url}
                        className={typeof window !== `undefined` && window.location.pathname === item.url && `active`}
                      >
                        {item.name}
                      </Link>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </Box>
      </ClickAwayListener>
    </nav>
  )
}
