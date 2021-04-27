import React from 'react';
import './Track.css';

const Track = (props) => {
  
  const handleAdd = (event) => {
    props.addTrack(props.track)
  }

  const handleRemove = (event) => {
    props.removeTrack(props.track)
  }

  const renderAction = () => {
    return props.isRemoval ?  <button onClick={handleRemove} className="Track-action">-</button> :  <button onClick={handleAdd} className="Track-action">+</button>
  }


   return (
      <div className="Track" key={props.track.id}>
        <div className="Track-information">
          <h3>{props.track.name}</h3>
          <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {renderAction()}
      </div>
    ); 
  
  
}

export default Track;
