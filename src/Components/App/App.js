import React, { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

const App = () => {
  
  const[playlistName, setPlaylistName] = useState('New Playlist')
  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])

  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults)
    })
  }
 
  const changePlaylistName = (playlistName) => {
    setPlaylistName(playlistName)
  }

  const removeTrack = (track) => {
    let tracks = [...playlistTracks]
    console.log(playlistTracks)
    let filteredPlaylist = tracks.filter(currentTrack => {
      console.log(currentTrack)
      console.log(track)
      return currentTrack.id !== track.id
    })
    console.log(filteredPlaylist)
    setPlaylistTracks(filteredPlaylist)
  }

  const addTrack = (track) => {
    let tracks = [...playlistTracks]
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }
    tracks.push(track)
    console.log(tracks)
    setPlaylistTracks(tracks)
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName('New Playlist')
        setPlaylistTracks([])
      })
  }
  
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <Playlist playlistTracks={playlistTracks} 
                    removeTrack={removeTrack} 
                    playlistName={playlistName} 
                    changePlaylistName={changePlaylistName} 
                    savePlaylist={savePlaylist} />  
        </div>
      </div>
    </div>
  )
}

export default App
