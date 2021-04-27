import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist= (props) => {
 
  const handleChange = (event) => {
    props.changePlaylistName(capitalize(event.target.value))
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    let words = s.split(' ')
    let newWords = []
    for (let i = 0; i < words.length; i++) {
      let word = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      newWords.push(word)
    }
    return newWords.join(' ')
  }

  const handleSave = (event) => {
    props.savePlaylist()
  }

   return (
      <div className="Playlist">
        <input type="text" onChange={handleChange}  value={props.playlistName} />
        <TrackList trackListings={props.playlistTracks} 
                   isRemoval={true} 
                   removeTrack={props.removeTrack} />
        <button onClick={handleSave} className="Playlist-save">SAVE TO <FontAwesomeIcon icon={faSpotify} /></button>
      </div>
    )
  
}

export default Playlist
