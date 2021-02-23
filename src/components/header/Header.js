import { useState, useRef } from 'react';
import { ReactComponent as Play } from './radio.svg';
import { ReactComponent as Pause } from './pause.svg';
import { ReactComponent as Stop } from './stop.svg';

function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioEl = useRef();
  const startMusic = () => {
    audioEl.current.play();
    setIsPlaying(true);
  };
  const pauseMusic = () => {
    audioEl.current.pause();
    setIsPlaying(false);
  };
  const stopMusic = () => {
    audioEl.current.pause();
    audioEl.current.currentTime = 0;
    setIsPlaying(false);
  };
  return (
    <header className="d-flex">
      <div className="container">
        <h1 className="logo-container d-flex"><img src="img/logo.png" alt="logo maison Salvi" /></h1>
        <div className="audio-control">{!isPlaying ? (
          <Play onClick={startMusic} />
        ) : (
          <Pause onClick={pauseMusic} />
        )}
          <Stop onClick={stopMusic} />
          <audio preload="auto" ref={audioEl}>
            <source src="img/Jean-Jacques Perrey - in a happy moog.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </header>
  );
}

export default Header;
