import '../../styles/base.scss'
import './services.scss'

import sfx from '../services/icons/sfx.svg'
import production from '../services/icons/production.svg'
import implementation from '../services/icons/implementation.svg'
import composition from '../services/icons/composition.svg'

const Services = () => {
  return (
    <div className="container">
      <section className="services">
        <div className="services__head">
          <h2 className="services__title">Services</h2>
          <p className="services__descr">High-end audio services designed to sustain immersion. Comprehensive sound that defines your world.</p>
        </div>
        <div className="services__grid">

          <div className="services__grid__sfx">
            <div className="services__grid__icon">
              <img src={sfx} alt='sfx icon' />
            </div>
            <div className="services__grid__content">
              <h3 className="services__grid__title">sfx design</h3>
              <p className="services__grid__descr">Original sound effects. Weaponry, UI, magic, and custom Foley</p>
            </div>
          </div>

          <div className="services__grid__production">
            <div className="services__grid__icon">
              <img src={production} alt='production icon'/>
            </div>
            <div className="services__grid__content">
              <h3 className="services__grid__title">post production</h3>
              <p className="services__grid__descr">Voiceover casting, dialogue cleaning, and final mastering in 7.1 and Dolby Atmos to elevate your creative vision</p>
            </div>
          </div>

          <div className="services__grid__composition">
            <div className="services__grid__icon">
              <img src={composition} alt='composition icon'/>
            </div>
            <div className="services__grid__content">
              <h3 className="services__grid__title">ost composition</h3>
              <p className="services__grid__descr">Adaptive music. From dark ambient and heavy synthwave to epic orchestral scores</p>
            </div>
          </div>

          <div className="services__grid__implementation">
            <div className="services__grid__icon">
              <img src={implementation} alt='implementation icon'/>
            </div>
            <div className="services__grid__content">
              <h3 className="services__grid__title">audio implementation</h3>
              <p className="services__grid__descr">Seamless engine integration via Wwise and FMOD. Interactive audio logic mapped to gameplay</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Services