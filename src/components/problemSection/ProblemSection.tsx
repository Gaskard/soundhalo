import '../../styles/base.scss'
import './problemSection.scss'

import trailer from '../problemSection/video/trailer-web.mp4'

const ProblemSection = () => {
  return (
      <section className="problem">
        <div className="container">
        <div className="problem__text">
          <h2 className="problem__title">Bad <span>audio</span> shatters your immersion</h2>
          <div className="problem__right__block">
            <h3 className="problem__right__title">the problem</h3>
            <p className="problem__right__descr">You can spend millions on stunning graphics and polished mechanics. But if the sound is cheap, the experience is dead. Audio is 50% of the it matters</p>
          </div>
        </div>
        </div>
        <video src={trailer}
             className="problem__player"
             autoPlay={true}
             loop={true}
             muted={true}>
        </video>
        <div className="container">
          <div className="problem__warning">[ WARNING: USE HEADPHONES ]</div>
        </div>
      </section>
  )
}

export default ProblemSection