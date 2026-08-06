import './portfolio.scss'

import kratos from '../portfolio/img/kratos.jpg'
import league from '../portfolio/img/league.jpg'
import witcher from '../portfolio/img/witcher.jpg'
import jocker from '../portfolio/img/jocker.jpg'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__player">
        <div className="portfolio__header">
          <h2 className="portfolio__title">PORTFOLIO</h2>
          <p className="portfolio__selected">[ Selected works ]</p>
        </div>
        <div className="portfolio__video">
          <video src="#" className="portfolio__video-element"></video>
          <div className="portfolio__video-info">
            <span className="portfolio__video-category">Composition & Audio Implementation</span>
            <h3 className="portfolio__video-name">RPG Soundtrack</h3>
          </div>
        </div>
        <div className="portfolio__controls">
          <button className="portfolio__control-btn">▶</button>
          <div className="portfolio__progress-track">
            <div style={{width: '45%'}} className="portfolio__progress-filled"></div>
          </div>
          <div className="portfolio__controls-right">
            <button className="portfolio__control-btn">🔊</button>
            <button className="portfolio__control-btn">[ ]</button>
          </div>
        </div>

        <div className="portfolio__slider">
          <button className="portfolio__arrow portfolio__arrow--up">⌃</button>
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
          <button className="portfolio__arrow portfolio__arrow--down">⌄</button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio