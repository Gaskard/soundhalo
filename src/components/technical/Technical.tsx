import './technical.scss';
import vector from './img/vector.svg'


const Technical = () => {
  return (
    <div className="container">
      <section className="technical">
        <div className="technical__left">
          <div className="technical__header">
            <h2 className="technical__title">TECHNICAL STANDARDS</h2>
            <p className="technical__descr">Precision audio engineering for immersive games and cinema. High-performance audio meets technical excellence. Zero recycled assets</p>
            <button className="technical__discuss">Discuss your project</button>
          </div>
          <p className="technical__footer">[ NEXT-GEN <br/> ENGINE READY ]</p>
        </div>
        <div className="technical__right">
          <div className="technical__card">
            <p className="technical__card__header">100%</p>
            <div className="technical__card__text">
              <h3 className="technical__card__title">Unique assets</h3>
              <p className="technical__card__descr">Full intellectual property rights to you</p>
            </div>
          </div>

          <div className="technical__card">
            <p className="technical__card__header">0.01s</p>
            <div className="technical__card__text">
              <h3 className="technical__card__title">RAW FOLEY</h3>
              <p className="technical__card__descr">Original source material recorded in our custom studio. Unique textures only. Zero recycled assets, ensuring your project sounds completely distinct</p>
            </div>
          </div>

          <div className="technical__card">
            <p className="technical__card__header">48h+</p>
            <div className="technical__card__text">
              <h3 className="technical__card__title">LATENCY TARGET</h3>
              <p className="technical__card__descr">Sample-accurate sync with Unreal Engine and Unity. Performance-optimized audio</p>
            </div>
          </div>
        </div>
        <img src={vector} alt="vector" className="technical__vector"/>
      </section>
    </div>
  )
}

export default Technical