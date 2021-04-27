import React from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

const SearchResults = (props) => {
 
   return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList trackListings={props.searchResults} 
                   isRemoval={false} 
                   addTrack={props.addTrack} />
      </div>
    ); 
  
  
}

export default SearchResults
