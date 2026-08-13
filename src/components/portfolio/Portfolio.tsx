import type {IVideoItem} from './Portfolio.types'

import './portfolio.scss'

import {useEffect, useRef, useState} from 'react'

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

const Portfolio = () => {

    const portfolioVideoData = [
    {
      id: '1',
      getSrc: ()=> import('./video/godOfWarTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: kratos,
      alt: 'kratos'
    },
    {
      id: '2',
      getSrc: ()=> import('./video/arcaneTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: league,
      alt: 'league'
    },
    {
      id: '3',
      getSrc: ()=> import('./video/witcherTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: witcher,
      alt: 'witcher'
    },
    {
      id: '4',
      getSrc: ()=> import('./video/jockerTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: jocker,
      alt: 'jocker'
    },
  ]

  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentVideo, setCurrentVideo] = useState<IVideoItem>(portfolioVideoData[0])
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(()=> {
    portfolioVideoData[0].getSrc().then(module => setVideoUrl(module.default))
  }, [])

  useEffect(() => {
    if(videoRef.current && videoUrl) {
      videoRef.current.load()
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        setIsPlaying(false)
      })
    }
  }, [videoUrl])


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

  const handleChangeVideo = async (item: IVideoItem) => {
    if (item.id === currentVideo.id) return
    setCurrentVideo(item)
    const videoModule = await item.getSrc()
    setVideoUrl(videoModule.default)
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
            src={videoUrl || undefined}
            className="portfolio__video-element"
            autoPlay={true}
            loop={true}
            muted={true}
            onTimeUpdate={handleTimeUpdate}
            poster={currentVideo.thumbnail}
          >
          </video>
          <div className="portfolio__video-interface">
            <div className="portfolio__video-info">
              <span className="portfolio__video-category">{currentVideo.category}</span>
              <h3 className="portfolio__video-name">{currentVideo.name}</h3>
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
            {portfolioVideoData.map(item => (
              <div onClick={() => handleChangeVideo(item)} key={item.id} className={item.id === currentVideo.id ? "portfolio__thumbs-item portfolio__thumbs-item--active" : "portfolio__thumbs-item"}>
                <img id={item.id} src={item.thumbnail} alt={item.alt}/>
              </div>
            ))}
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