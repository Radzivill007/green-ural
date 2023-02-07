import React from 'react'
import InputMask from 'react-input-mask'
import { Link } from 'gatsby'
export default function MyModal({ modal, modalClose }) {
  return (
    <div
      className={modal ? `${classes.inner} ${classes.show}` : classes.inner}
      role="button"
      tabIndex={0}
      aria-label="modal-background"
      onClick={modalClose}
      onKeyDown={modalClose}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="modal-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className={classes.close} onClick={modalClose} onKeyDown={modalClose} role="button" tabIndex={0} aria-label="modal-close" />
        <h2>Обратная связь</h2>
        <p>Имя</p>
        <input />
        <p>Телефон</p>
        <InputMask mask="+9(999)999-99-99" defaultValue="+7 (___) ___-__-__" placeholder="+7 (___) ___-__-__" maskChar="_" />
        <p>E-mail</p>
        <input />
        <p>Комментарии</p>
        <textarea />
        <div>
          <button type="submit" className={classes.submit}>
            Отправить
          </button>
        </div>
        <p className={classes.policy}>
          Нажимая на кнопку, Вы даёте согласие на <Link to="/policy">обработку персональных данных</Link>
        </p>
      </div>
    </div>
  )
}
