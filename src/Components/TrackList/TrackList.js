import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'

const TrackList = (props) => {
 

   return (
      <div className="TrackList">
         {props.trackListings.map(track => {
          return <Track key={track.id} 
                        track={track} 
                        addTrack={props.addTrack}
                        isRemoval={props.isRemoval}
                        removeTrack={props.removeTrack}  />
        })} 
      </div>
    )
  
}

export default TrackList