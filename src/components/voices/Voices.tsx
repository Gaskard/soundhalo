import './voices.scss'

import arrowLeft from './icons/arrowleft.svg'
import arrowRight from './icons/arrowright.svg'

const reviewData = [
  {
    title: 'Instant Connection',
    text: 'The only team that truly understands atmosphere. We didn’t have to explain how \'cold cosmic horror\' should sound — their first demo gave the whole studio goosebumps.',
    author: '— Creative Director, Nebula'
  },
  {
    title: 'The emotional depth they brought was incredible',
    text: 'The soundtrack they composed is a masterpiece. It didn’t just accompany our visuals.',
    author: '— Founder, Lunar Pixel Games'
  },
  {
    title: 'Pure Audio Magic',
    text: 'Every sound effect felt alive and hit exactly where it needed to. They transformed our raw gameplay into a deeply immersive, cinematic experience.',
    author: '— Lead Audio Designer, Pulse Games'
  },
]


const Voices = () => {
  return (
    <div className="container">
      <section className="voices">
        <div className="voices__head">
          <h2 className="voices__title">Voices</h2>
          <div className="voices__slider">
            <button className="voices__arrow">
              <img src={arrowLeft} alt="arrow left"/>
            </button>
            <button className="voices__arrow">
              <img src={arrowRight} alt="arrow right"/>
            </button>
          </div>
        </div>
        <div className="voices__review">
            {reviewData.map(item => (
              <div className="voices__review__item">
                <h3 className="voices__review__title">{item.title}</h3>
                <p className="voices__review__text">{item.text}</p>
                <p className="voices__review__author">{item.author}</p>
              </div>
            ))}
          </div>
      </section>
    </div>
  )
}

export default Voices
