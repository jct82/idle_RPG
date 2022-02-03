import './style.scss';

import image1 from '../../assets/mario1.jpg';
import image2 from '../../assets/mario2.jpg';
import image3 from '../../assets/mario3.jpg';

export default function Home() {
  return (
    <div className="home">

      <div className="frame-wrapper">
        <div className="frame">
          <div className="frame-inner">
            <div className="video">
              <iframe src="https://www.youtube.com/embed/JNl1_hRwpXE" title="YouTube video player" allowFullScreen />
             </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame">
          <div className="frame-inner">
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
