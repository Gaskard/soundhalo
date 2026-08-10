import './portfolio.scss'

import kratos from '../portfolio/img/kratos.jpg'
import league from '../portfolio/img/league.jpg'
import witcher from '../portfolio/img/witcher.jpg'
import jocker from '../portfolio/img/jocker.jpg'
import jockerVideo from '../portfolio/video/trailer-web.mp4'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__player">
        <div className="portfolio__header">
          <h2 className="portfolio__title">PORTFOLIO</h2>
          <p className="portfolio__selected">[ Selected works ]</p>
        </div>
        <div className="portfolio__video">
          <video
            src={jockerVideo}
            className="portfolio__video-element"
            autoPlay={true}
            loop={true}
            muted={true}>
          </video>
          <div className="portfolio__video-info">
            <span className="portfolio__video-category">Composition & Audio Implementation</span>
            <h3 className="portfolio__video-name">RPG Soundtrack</h3>
          </div>
          <div className="portfolio__controls">
            <button className="portfolio__control-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11.5L4 21L4 2L20 11.5Z" fill="white" />
              </svg>
            </button>
          <div className="portfolio__progress-track">
            <div style={{width: '45%'}} className="portfolio__progress-filled"></div>
          </div>
          <div className="portfolio__controls-right">
            <button className="portfolio__control-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6695 2.69531C14.5313 2.69531 14.3906 2.73281 14.2617 2.81953L5.95312 8.25H2.10938C1.90312 8.25 1.73438 8.41875 1.73438 8.625V15.375C1.73438 15.5813 1.90312 15.75 2.10938 15.75H5.95312L14.2617 21.1805C14.3906 21.2648 14.5336 21.3047 14.6695 21.3047C15.0609 21.3047 15.4219 20.993 15.4219 20.5523V3.44766C15.4219 3.00703 15.0609 2.69531 14.6695 2.69531ZM13.7344 18.8203L6.87656 14.3367L6.45469 14.0625H3.42188V9.9375H6.45469L6.87422 9.66328L13.7344 5.17969V18.8203ZM21.8906 11.1562H18.8906C18.6844 11.1562 18.5156 11.325 18.5156 11.5312V12.4688C18.5156 12.675 18.6844 12.8438 18.8906 12.8438H21.8906C22.0969 12.8438 22.2656 12.675 22.2656 12.4688V11.5312C22.2656 11.325 22.0969 11.1562 21.8906 11.1562ZM20.9086 17.2922L18.3234 15.7992C18.281 15.7749 18.2341 15.7592 18.1856 15.753C18.137 15.7468 18.0877 15.7502 18.0405 15.763C17.9933 15.7759 17.949 15.7979 17.9103 15.8278C17.8716 15.8578 17.8392 15.895 17.8148 15.9375L17.3484 16.7461C17.2453 16.9242 17.3062 17.1539 17.4844 17.257L20.0695 18.75C20.112 18.7743 20.1589 18.79 20.2074 18.7962C20.2559 18.8025 20.3052 18.799 20.3525 18.7862C20.3997 18.7734 20.4439 18.7513 20.4827 18.7214C20.5214 18.6915 20.5538 18.6542 20.5781 18.6117L21.0445 17.8031C21.1477 17.625 21.0844 17.3953 20.9086 17.2922ZM17.8125 8.0625C17.8368 8.10498 17.8693 8.14225 17.908 8.17219C17.9467 8.20213 17.9909 8.22414 18.0382 8.23699C18.0854 8.24983 18.1347 8.25324 18.1832 8.24703C18.2318 8.24081 18.2786 8.2251 18.3211 8.20078L20.9062 6.70781C21.0844 6.60469 21.1453 6.375 21.0422 6.19687L20.5781 5.39062C20.5538 5.34815 20.5214 5.31088 20.4827 5.28094C20.4439 5.251 20.3997 5.22898 20.3525 5.21614C20.3052 5.2033 20.2559 5.19989 20.2074 5.2061C20.1589 5.21231 20.112 5.22802 20.0695 5.25234L17.4844 6.74531C17.3988 6.79521 17.3364 6.87698 17.3109 6.97272C17.2855 7.06847 17.299 7.17041 17.3484 7.25625L17.8125 8.0625Z" fill="#E6E6E6" />
              </svg>
            </button>
            <button className="portfolio__control-btn">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.2795V0H4.76314V1.91974H2.48722V13.3537H4.76314V15.2795H0Z" fill="#E6E6E6" />
                <path d="M17.5263 0V15.2795H12.7632V13.3537H15.0391V1.91974H12.7632V0H17.5263Z" fill="#E6E6E6" />
              </svg>
            </button>
          </div>
        </div>
        </div>

        <div className="portfolio__slider">
          <button className="portfolio__arrow portfolio__arrow--up">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 18L12 7L0.999999 18" stroke="white" stroke-width="2" />
            </svg>
          </button>
          <div className="portfolio__thumbs-list">
            <div className="portfolio__thumbs-item portfolio__thumbs-item--active">
              <img src={kratos} alt='kratos'/>
            </div>
            <div className="portfolio__thumbs-item portfolio__thumbs-item">
              <img src={league} alt='league'/>
            </div>
            <div className="portfolio__thumbs-item portfolio__thumbs-item">
              <img src={witcher} alt='witcher'/>
            </div>
            <div className="portfolio__thumbs-item portfolio__thumbs-item">
              <img src={jocker} alt='jocker'/>
            </div>
          </div>
          <button className="portfolio__arrow portfolio__arrow--down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7L12 18L23 7" stroke="white" stroke-width="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio