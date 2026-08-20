import './voices.scss'

import type { IReviewsItem } from './Voices.types'

import { useState } from 'react'

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
  {
  id: 3,
  title: 'Next-Level Sound Design',
  text: 'They don’t just write music, they build complete sonic worlds. Their attention to detail in every layer turned our game into an unforgettable journey.',
  author: '— Executive Producer, Hyperion Interactive'
},
{
  id: 4,
  title: 'Unmatched Musical Vision',
  text: 'Working with them was completely seamless. They captured the exact atmosphere we needed on the very first try and elevated the entire mood.',
  author: '— Game Director, Voxel Horizon'
},
]


const Voices = () => {

  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex < reviewData.length - 2) {
      setStartIndex(prev => prev + 2)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 2)
    }
  }

  return (
    <div className="container">
      <section className="voices">
        <div className="voices__head">
          <h2 className="voices__title">Voices</h2>
          <div className="voices__slider">
            <button onClick={handlePrev} className="voices__arrow">
              <img src={arrowLeft} alt="arrow left"/>
            </button>
            <button onClick={handleNext} className="voices__arrow">
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
            )).slice(startIndex, startIndex + 2)}
        </div>
      </section>
    </div>
  )
}

export default Voices
