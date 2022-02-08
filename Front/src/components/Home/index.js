import './style.scss';
import image4 from '../../assets/Scared.png';
import image5 from '../../assets/Calm.png';
import image6 from '../../assets/frog.png';
import image7 from '../../assets/wizard.png';
import imageSlide1 from '../../assets/metier.png';
import imageSlide2 from '../../assets/image combat.png';
import imageSlide3 from '../../assets/image mobile.png';


export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="lore">
          <p>
            IdleRPG est développé par une petite équipe de passionnés,
            venant d'horizons différents et mettant en avant leur
            compétences et savoir faire pour vous apporter la meilleure
            expérience de jeu possible.
          </p>
          <p>
            L'équipe de dév.
          </p>
        </div>
        <div className="demo-block">
          <div className="frame-wrapper">
            <div className="frame">
              <div className="frame-inner">
                <div className="video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/TSYGiQ-1Vi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame">
              <div className="frame-inner">
                <div className="slides">
                  <div className="slide-container">
                    <div className="slide"><img src={imageSlide1} alt="slide métier" /></div>
                    <div className="slide"><img src={imageSlide2} alt="slide combat" /></div>
                    <div className="slide"><img src={imageSlide3} alt="slide mobile" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h3>Les développeurs&nbsp;:</h3>
        <div className="dev-group">
          <div className="dev">
            <div className="identity">Derennes Valentin</div>
            <div className="medail-img">
              <img src={image6}/>
            </div>
          </div>
          <div className="dev">
            <div className="identity">a6kc4e</div>
            <div className="medail-img">
              <img src={image4}/>
            </div>
          </div>
          <div className="dev">
            <div className="identity">Jean Trinquet</div>
            <div className="medail-img">
              <img src={image4}/>
            </div>
          </div>
          <div className="dev">
            <div className="identity">Mathias Benmansour</div>
            <div className="medail-img">
              <img src={image7}/>
            </div>
          </div>
          <div className="dev">
            <div className="identity">Castellan</div>
            <div className="medail-img">
              <img src={image5}/>
            </div>
          </div>
        </div>
        <span className="mail">Contactez-nous&nbsp;: Idle.RPG.fr@gmail.com</span>
      </div>
      <div className="update">
        <span className="update-text">Le jeu est en cours de maintenance, mise à jour à la version 0.0.5, merci de bien vouloir patienter et de revenir ultérieurement ...&nbsp;</span>
        <span className="update-text">Le jeu est en cours de maintenance, mise à jour à la version 0.0.5, merci de bien vouloir patienter et de revenir ultérieurement ...&nbsp;</span>
        <span className="update-text">Le jeu est en cours de maintenance, mise à jour à la version 0.0.5, merci de bien vouloir patienter et de revenir ultérieurement ...&nbsp;</span>
      </div>
    </div>
  );
}
