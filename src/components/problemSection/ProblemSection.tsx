import '../../styles/base.scss'
import './problemSection.scss'

const ProblemSection = () => {
  return (
    <div className="container">
      <section className="problem">
        <div className="problem__text">
          <h2 className="problem__title">Bad <span>audio</span> shatters your immersion</h2>
          <div className="problem__right__block">
            <h3 className="problem__right__title">the problem</h3>
            <p className="problem__right__descr">You can spend millions on stunning graphics and polished mechanics. But if the sound is cheap, the experience is dead. Audio is 50% of the it matters</p>
          </div>
        </div>
        <video src="https://www.youtube.com/watch?v=jGfiPs9zuhE&t=2s" width={1549} className="problem__player"></video>
        <div className="problem__warning">[ WARNING: USE HEADPHONES ] </div>
      </section>
    </div>
  )
}

export default ProblemSection