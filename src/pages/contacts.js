import React, { useRef } from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../components/wrapper'
import Social from '../components/social'
import emailjs from '@emailjs/browser'
import PhoneInput from 'react-phone-input-2'

const Contacts = ({ data }) => {
  data = data.configJson
  const [showAlert, setShowAlert] = React.useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_mjwcqnb', 'template_cw9y3jj', form.current, 'user_eoS7mUZ09qO1Rc4fi9PX5').then(
      (result) => {
        console.log(result.text)
        setShowAlert(true)
        e.target.reset()
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <Wrapper title="Контакты" titleOfPage="Контакты" descriptionOfPage="Контакты" keywordsOfPage={['Контакты']}>
      <section className="contactsPage">
        <div className="one">
          <div className={`container position-relative`}>
            <div className="row">
              <div className="col-4">
                <StaticImage src="../assets/img/phone.png" alt={`phone`} />
                <h3>Телефон</h3>
                <p>Мы всегда на связи, просто позвоните нам по данному номеру телефона.</p>
                <div>
                  <a href={data.phoneLink}>{data.phone}</a>
                </div>
              </div>
              <div className="col-4">
                <StaticImage src="../assets/img/mail.png" alt={`mail`} />
                <h3>Почта</h3>
                <p>Наш почтовый ящик всегда открыт для вопросов и предложений.</p>
                <div>
                  <a href={`mailto:${data.mail}`}>{data.mail}</a>
                </div>
                <div>
                  <a href={`mailto:${data.mailpr}`}>{data.mailpr}</a>
                  <span>(для СМИ)</span>
                </div>
              </div>
              <div className="col-4">
                <StaticImage src="../assets/img/location.png" alt={`location`} />
                <h3>Адрес</h3>
                <p>
                  620026, Свердловская область, г. Екатеринбург, <br /> ул. Тверитина 34/5.
                </p>
                <div>
                  <a href="https://yandex.ru/maps/-/CCUyqLVITB">Посмотреть на карте</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="container">
            <h2>Оставьте свое обращение</h2>
            <p>и получите ответ от нас.</p>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="your-name" size="40" placeholder="Ваше имя*" required />
              <PhoneInput
                inputProps={{
                  name: 'your-phone',
                  required: true
                }}
                specialLabel=""
                name="your-phone"
                country={'ru'}
                onlyCountries={['ru']}
                countryCodeEditable={false}
                placeholder="+7 (XXX) XXX-XX-XX"
                required
              />
              <input type="email" name="your-email" size="40" placeholder="Ваш E-mail*" required />
              {/* <input type="text" name="your-subject" size="40" placeholder="Тема*" required /> */}
              <select name="your-subject" required>
                <option value="" disabled selected hidden>
                  Тип обращения*
                </option>
                <option>Воздух</option>
                <option>Вода</option>
                <option>Лес</option>
                <option>Почта</option>
                <option>Мусор и мусоропереработка</option>
                <option>Другое</option>
              </select>
              <textarea name="your-message" cols="40" rows="5" placeholder="Ваше сообщение*" required />
              <div className="personal">
                Нажимая на кнопку, я принимаю <Link to="/policy">соглашение</Link> на обработку персональных данных.
              </div>
              <button type="submit" value="Send">
                Отправить
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className={`spasibo ${showAlert ? 'show' : ''}`}>
            <div className="close" onClick={() => setShowAlert(false)} />
            <p>Ваша заявка успешно отправлена, Спасибо!</p>
          </div>
        </div>
        <div className="three">
          <div className="container">
            <div className="social">
              <Social />
            </div>
          </div>
        </div>
        {/* <button onClick={() => setShowAlert(true)}>ТЕСТ</button> */}
      </section>
    </Wrapper>
  )
}

export default Contacts

export const data = graphql`
  query {
    configJson {
      phone
      phoneLink
      town
      mail
      mailpr
    }
  }
`
