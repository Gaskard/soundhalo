import './voices.scss'

import type { IReviewsItem } from './Voices.types'

import { useRef, useState } from 'react'

import arrowLeft from './icons/arrowleft.svg'
import arrowRight from './icons/arrowright.svg'

const reviewData: IReviewsItem[] = [
  {
    id: 0,
    title: 'Instant Connection',
    text: 'The only team that truly understands atmosphere. We didn’t have to explain how \'cold cosmic horror\' should sound — their first demo gave the whole studio goosebumps.',
    author: '— Creative Director, Nebula'
  },
  {
    id: 1,
    title: 'The emotional depth they brought was incredible',
    text: 'The soundtrack they composed is a masterpiece. It didn’t just accompany our visuals.',
    author: '— Founder, Lunar Pixel Games'
  },
  {
    id: 2,
    title: 'Pure Audio Magic',
    text: 'Every sound effect felt alive and hit exactly where it needed to. They transformed our raw gameplay into a deeply immersive, cinematic experience.',
    author: '— Lead Audio Designer, Pulse Games'
  },
]


const Voices = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentReviews, setCurrentReviews] = useState<IReviewsItem[]>([])


  const handleArrowClick = () => {
    if (nextRef.current) {
      setCurrentIndex(next => next + 1)
    }
  } // do slider arrow click

  return (
    <div className="container">
      <section className="voices">
        <div className="voices__head">
          <h2 className="voices__title">Voices</h2>
          <div className="voices__slider">
            <button onClick={handleArrowClick} ref={prevRef} className="voices__arrow">
              <img src={arrowLeft} alt="arrow left"/>
            </button>
            <button onClick={handleArrowClick} ref={nextRef} className="voices__arrow">
              <img src={arrowRight} alt="arrow right"/>
            </button>
          </div>
        </div>
        <div className="voices__review">
          {reviewData.map((item : IReviewsItem) => (
              <div key={item.id} className="voices__review__item">
                <h3 className="voices__review__title">{item.title}</h3>
                <p className="voices__review__text">{item.text}</p>
                <p className="voices__review__author">{item.author}</p>
              </div>
            )).slice(0, 2)}
        </div>
      </section>
    </div>
  )
}

export default Voices
