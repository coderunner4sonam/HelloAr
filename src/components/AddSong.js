// components/AddSong.js
import React, { useState } from 'react';

const AddSong = ({ onAddSong }) => {
  const [newSong, setNewSong] = useState('');

  const addSongToServer = async (songData) => {
    // Simulate an asynchronous request to the server to add a new song
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful response
        resolve({ success: true });
      }, 1000); // Simulate a delay of 1 second
    });
  };

  const handleAddSong = async () => {
    try {
      // Simulate adding the song to the server
      const response = await addSongToServer({ title: newSong });

      // Assuming the server returns success
      if (response.success) {
        onAddSong({ id: Date.now(), title: newSong });
        setNewSong('');
        alert('Song added successfully!');
        // Handle success, e.g., update UI or navigate to another page
      } else {
        // Handle failure to add the song
        alert('Failed to add the song');
      }
    } catch (error) {
      // Handle other errors, e.g., network issues
      console.error('An error occurred during song addition', error);
    }
  };

  return (
    <div>
      <label>
        New Song:
        <input
          type="text"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
        />
      </label>
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default AddSong;
