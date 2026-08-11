import './portfolio.scss'

import { useRef, useState } from 'react'

import playIcon from '../portfolio/icons/play.svg'
import pauseIcon from '../portfolio/icons/pause.svg'
import soundIcon from '../portfolio/icons/sound.svg'
import fullScreenIcon from '../portfolio/icons/fullscreen.svg'
import arrowUpIcon from '../portfolio/icons/arrowup.svg'
import arrowDownIcon from '../portfolio/icons/arrowdown.svg'

import kratos from '../portfolio/img/kratos.jpg'
import league from '../portfolio/img/league.jpg'
import witcher from '../portfolio/img/witcher.jpg'
import jocker from '../portfolio/img/jocker.jpg'

import jockerTrailer from './video/jockerTrailer.webm'
import witcherTrailer from './video/witcherTrailer.webm'
import godOfWarTrailer from './video/godOfWarTrailer.webm'
import arcaneTrailer from './video/arcaneTrailer.webm'

const Portfolio = () => {

  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const portfolioVideoData = [
    {
      id: 4,
      src: jockerTrailer,
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack'
    }

  ]

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress(videoRef.current?.currentTime / videoRef.current?.duration * 100)
    }

  }

  const handlePlay = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        await videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section className="portfolio">
      <div className="portfolio__player">
        <div className="portfolio__header">
          <h2 className="portfolio__title">PORTFOLIO</h2>
          <p className="portfolio__selected">[ Selected works ]</p>
        </div>
        <div className="portfolio__video">
          <video
            ref={videoRef}
            src={jockerTrailer}
            className="portfolio__video-element"
            autoPlay={true}
            loop={true}
            muted={true}
            onTimeUpdate={handleTimeUpdate}
          >
          </video>
          <div className="portfolio__video-interface">
            <div className="portfolio__video-info">
              <span className="portfolio__video-category">Composition & Audio Implementation</span>
              <h3 className="portfolio__video-name">RPG Soundtrack</h3>
            </div>
          <div className="portfolio__controls">
            <button onClick={handlePlay} className="portfolio__control-btn">
              <img src={isPlaying ? pauseIcon : playIcon} alt="play/pause"/>
            </button>
          <div className="portfolio__progress-track">
            <div style={{width: `${progress}%`}} className="portfolio__progress-filled"></div>
          </div>
          <div className="portfolio__controls-right">
            <button className="portfolio__control-btn">
              <img src={soundIcon} alt="sound"/>
            </button>
            <button className="portfolio__control-btn">
              <img src={fullScreenIcon} alt="fullscreen"/>
            </button>
          </div>
        </div>
          </div>
        </div>

        <div className="portfolio__slider">
          <button className="portfolio__arrow portfolio__arrow--up">
            <img src={arrowUpIcon} alt="up"/>
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
            <img src={arrowDownIcon} alt="down"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio