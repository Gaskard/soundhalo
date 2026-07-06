import '../../styles/base.scss'
import '../header/header.scss'

import { useState } from 'react'

import logo from './img/logo.svg'

const Header = () => {

  const [activeEng, setActiveEng] = useState(true)
  const [activeUkr, setActiveUkr] = useState(false)

  return (
    <>
      <div className="background"></div>
      <div className="container">
        <header className="header">
          <div className="header__topbar">
            <img src={logo} alt="" className="header__logo"/>
            <nav className="header__navbar">
              <ul className="header__menu">
                <li className="header__menu-item">
                  <a href="" className="header__menu-link">Services</a>
                </li>
                <li className="header__menu-item">
                  <a href="" className="header__menu-link">Portfolio</a>
                </li>
                <li className="header__menu-item">
                  <a href="" className="header__menu-link">Voices</a>
                </li>
                <li className="header__menu-item">
                  <a href="" className="header__menu-link">FAQ</a>
                </li>
                <li className="header__menu-item">
                  <a href="" className="header__menu-link">Contact us</a>
                </li>
              </ul>
            </nav>
            <div className="header__language">
              <button
                onClick={() => {
                  setActiveEng(true)
                  setActiveUkr(false)
                }}
                className={activeEng ? 'header__language__button header__language__button-active' : "header__language__button"}>Eng</button>
              <button
                onClick={() => {
                  setActiveEng(false)
                  setActiveUkr(true)
                }}
                className={activeUkr ? 'header__language__button header__language__button-active' : "header__language__button"}>Ukr</button>
            </div>
          </div>
          <div className="header__block">
            <h1 className="header__title">
              <span className="header__title-accent">sound Design</span> <br/> for Games <br/>
              <span className="header__title-bottom">& Film
                <span className="header__title-descr">Custom sound design, OST, and audio <br/> implementation for games and cinema. <br/> Zero presets. Pure synthesis</span>
              </span>
            </h1>
            <button className="header__order">Start project</button>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header