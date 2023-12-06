// components/SongsList.js
import React, { useState } from 'react';

const SongsList = ({ songs }) => {
  return (
    <div>
      <h2>Songs List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
