import './style.scss';

import image1 from '../../assets/mario1.jpg';
import image2 from '../../assets/mario2.jpg';
import image3 from '../../assets/mario3.jpg';
import idleFrame1 from '../../assets/IdleFrame580x335.png';

export default function Home() {
  return (
    <div className="home">
      <div className="video-wrapper">
        <div className="video">
          <img src={idleFrame1} alt="frame" />
          <iframe src="https://www.youtube.com/embed/JNl1_hRwpXE" title="YouTube video player" allowFullScreen />
        </div>
      </div>
      <div className="slider-wrapper">
        <div className="slider">
          <div className="slider-inner">
            <div className="slides">
              <div className="slide-container">
                <div className="slide"><img src={image1} alt="slide mario et donkey kong" /></div>
                <div className="slide"><img src={image2} alt="slide mario et luigi" /></div>
                <div className="slide"><img src={image3} alt="slide mario et une banane" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="update">
        <span className="update-text">Le jeu est en cours de maintenance, merci de bien vouloir patientez et de revenir ultérieurement ...&nbsp;</span>
        <span className="update-text">Le jeu est en cours de maintenance, merci de bien vouloir patientez et de revenir ultérieurement ...&nbsp;</span>
        <span className="update-text">Le jeu est en cours de maintenance, merci de bien vouloir patientez et de revenir ultérieurement ...&nbsp;</span>
      </div>
    </div>
  );
}
