import '../../styles/base.scss'

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
              <img src={sfx} alt={sfx} />
            </div>
            <div className="services__grid__content">
              <h3 className="services__grid__title">sfx design</h3>
              <p className="services__grid__descr">Original sound effects. Weaponry, UI, magic, and custom Foley</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services