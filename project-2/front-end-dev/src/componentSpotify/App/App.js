import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import FunctionalComponent from '../../components/FunctionalComponent';
// import {ClassComponent, ClassComponent1} from '../../components/ClassComponent';
import Playlist from "../PlayList/PlayList";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../util/Spotify";

class App extends React.Component{
  constructor(props){
    super(props);
  

  this.state = {
    SearchResults: [],
    playListName: "New Playlist",
    playListTrack: []
  };

  this.search = this.search.bind(this);
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylistName = this.savePlaylistName.bind(this);
  this.removeTrackSearch = this.removeTrackSearch.bind(this);
  this.doThese = this.doThese.bind(this);
}

  search(term){
    Spotify.search(term).then(SearchResults => {
        this.setState({SearchResults: SearchResults});

    });
  }

  addTrack(track){
    let tracks = this.state.playListTrack;
    if(tracks.find(savedTrack => savedTrack.id === track.id )){
      return;
    }
    tracks.push(track);
    this.setState({playListTrack: tracks})
  }

  removeTrack(track){
    let tracks = this.state.playListTrack;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playListTrack: tracks});

    
  }

  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  updatePlaylistName(name){
    this.setState({updatePlaylistName: name})

  }

  savePlaylist(){
    const trackUris = this.state.playListTrack.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackUris).then(() => {
      this.setState({
        updatePlaylistName: "New Playlist",
        playListTrack:[]
      });
    })
  }

}

function App() {
  return (
    // <div> 
    
    //    <FunctionalComponent/>
    //    <ClassComponent/>
    //    <ClassComponent1/>

    // </div>
      <div>
           <h1> Hello World!</h1>
          <h1>
            <a href='http://localhost:3000'>Spotify Extension</a>

          </h1>

          <div className="App">
            <SearchBar onSearch = {this.search}/>
            <div className='App-playlist'>
              <SearchResults SearchResults={this.state.SearchResults} onAdd = {this.doThese}/>
              <Playlist playListTrack={this.state.playListTrack} onNameChange={this.updatePlaylistName} onReove = {this.removeTrack} onSave={this.savePlaylist}/>
            </div>
          </div>
      </div>

  
      
  );
}

export default App;
