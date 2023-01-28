import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
import Tracklist from "../TrackList/TrackList";

class SearchResults extends React.Component{
    render(){
        return(
            <div className="SearchResults">
               <h2>Results</h2>
               <Tracklist tracks={this.props.SearchResults} onAdd={this.props.onAdd}/>
            </div>
        );
    }
}

export default SearchResults;