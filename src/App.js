// import './App.css';

import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Login from './components/Login';
import OtpVerification from './components/OtpVerification';
import SongsList from './components/SongsList';
import AddSong from './components/AddSong';
import Player from './components/Player';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handleSeek = (progress) => {
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (progress / 100) * duration;
  };

  const getCurrentSong = () => {
    return currentSongIndex !== null ? songs[currentSongIndex] : null;
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    } else if (audioRef.current && !isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login setPhoneNumber={setPhoneNumber} />} />
      <Route path="/verify-otp" element={<OtpVerification phoneNumber={phoneNumber} />} />
      <Route path="/songs-list" element={<SongsList songs={songs} />} />
      <Route path="/songs-list/add" element={<AddSong onAddSong={handleAddSong} />} />
      <Route path="/player" element={
        <>
          <Player
            currentSong={getCurrentSong()}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSeek={handleSeek}
          />
          {getCurrentSong() && (
            <audio ref={audioRef} src={getCurrentSong().audioSrc} />
          )}
        </>
      } />
    </Routes>
  </Router>
  );
};

export default App;

