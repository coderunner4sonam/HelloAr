// components/Player.js
import React, { useState } from 'react';

const Player = ({ currentSong, onPlayPause, onPrevious, onNext, onSeek }) => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <h2>Player</h2>
      <p>Now Playing: {currentSong.title}</p>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onPlayPause}>Play/Pause</button>
      <button onClick={onNext}>Next</button>
      <input
        type="range"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
        onMouseUp={() => onSeek(progress)}
      />
    </div>
  );
};

export default Player;
