import React from 'react'
import { Link } from 'gatsby'
import Wrapper from '../components/wrapper'

const NotFoundPage = () => {
  return (
    <Wrapper
      title="Ошибка 404"
      titleOfPage="Страница не найдена: 404"
      descriptionOfPage="Запрошенная страница не найдена."
      keywordsOfPage={['404', 'PageNotFound']}
    >
      <section style={{ paddingTop: '187px', paddingBottom: '100px', backgroundColor: '#f7f7f7', minHeight: '70vh' }}>
        <div className="container">
          <p>Страница не найдена</p>
          <Link to="/">На главную</Link>
        </div>
      </section>
    </Wrapper>
  )
}

export default NotFoundPage
