import type {IVideoItem} from './Portfolio.types'

import './portfolio.scss'

import {useEffect, useRef, useState, type MouseEvent } from 'react'

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
      id: '0',
      getSrc: ()=> import('./video/godOfWarTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: kratos,
      alt: 'kratos'
    },
    {
      id: '1',
      getSrc: ()=> import('./video/arcaneTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: league,
      alt: 'league'
    },
    {
      id: '2',
      getSrc: ()=> import('./video/witcherTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: witcher,
      alt: 'witcher'
    },
    {
      id: '3',
      getSrc: ()=> import('./video/jockerTrailer.webm'),
      category: 'Composition & Audio Implementation',
      name: 'RPG Soundtrack',
      thumbnail: jocker,
      alt: 'jocker'
    },
  ]

  const videoRef = useRef<HTMLVideoElement>(null)
  const progressTrackRef = useRef<HTMLDivElement>(null)

  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentVideo, setCurrentVideo] = useState<IVideoItem>(portfolioVideoData[0])
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(true)

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

  const handleArrowChange = async (delta: number) => {
    const currentIndex = portfolioVideoData.findIndex(item => item.id === currentVideo.id)
    let finalIndex = currentIndex + delta
    if (finalIndex < 0) {
      finalIndex = portfolioVideoData.length - 1
    } else if (finalIndex > portfolioVideoData.length - 1) {
      finalIndex = 0
    }
    const nextVideo = portfolioVideoData[finalIndex]
    await handleChangeVideo(nextVideo)
  }

  const toggleFullScreen = async () => {
      if (!document.fullscreenElement) {
        videoRef.current?.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
  }

  const handleToggleMute = ()=> {
      if (videoRef.current) {
        const nextMutedState = !isMuted
        videoRef.current.muted = nextMutedState
        setIsMuted(nextMutedState)
      }
  }

  const handleProgressClick = (e: MouseEvent) => {
      const track = progressTrackRef.current
      const video = videoRef.current
    if (track && video && video.duration) {
      const rect = track.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      video.currentTime = percentage * video.duration
      setProgress(percentage * 100)
    }
  }

  return (
    <section className="portfolio">
      <div className="portfolio__player">
        <div className="container">
          <div className="portfolio__header">
            <h2 className="portfolio__title">PORTFOLIO</h2>
            <p className="portfolio__selected">[ Selected works ]</p>
          </div>
        </div>
        <div className="portfolio__video">
          <video
            onClick={handlePlay}
            ref={videoRef}
            src={videoUrl || undefined}
            className="portfolio__video-element"
            autoPlay={true}
            loop={true}
            muted={isMuted}
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
          <div onClick={handleProgressClick} ref={progressTrackRef} className="portfolio__progress-track">
            <div style={{width: `${progress}%`}} className="portfolio__progress-filled"></div>
          </div>
          <div className="portfolio__controls-right">
            <button onClick={handleToggleMute} className={`portfolio__control-btn ${isMuted ? 'portfolio__control-btn--muted' : ''}`}>
              <img src={soundIcon} alt="sound"/>
            </button>
            <button onClick={toggleFullScreen} className="portfolio__control-btn">
              <img src={fullScreenIcon} alt="fullscreen"/>
            </button>
          </div>
        </div>
          </div>
        </div>

        <div className="portfolio__slider">
          <button onClick={() => handleArrowChange(-1)} className="portfolio__arrow portfolio__arrow--up">
            <img src={arrowUpIcon} alt="up"/>
          </button>
          <div className="portfolio__thumbs-list">
            {portfolioVideoData.map(item => (
              <div onClick={() => handleChangeVideo(item)} key={item.id} className={item.id === currentVideo.id ? "portfolio__thumbs-item portfolio__thumbs-item--active" : "portfolio__thumbs-item"}>
                <img id={item.id} src={item.thumbnail} alt={item.alt}/>
              </div>
            ))}
          </div>
          <button onClick={() => handleArrowChange(1)} className="portfolio__arrow portfolio__arrow--down">
            <img src={arrowDownIcon} alt="down"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio