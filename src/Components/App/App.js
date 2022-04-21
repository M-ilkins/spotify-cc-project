import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {Playlist} from '../Playlist/Playlist';
import {Tracklist} from '../Tracklist/Tracklist'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {SearchResults:[
                  {name: 'name1', artist: 'artist1', album: 'album1', id: '1'},
                  {name: 'name2', artist: 'artist2', album: 'album2', id: '2'},
                  {name: 'name3', artist: 'artist3', album: 'album3', id: '3'}],
                  playlistName: 'My Playlist',
                  playlistTracks: [{name: 'song name', artist: 'artist', album: 'album', id: '1'}]
                }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }
  

  render() {
    return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar/>
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults} 
      onAdd={this.addTrack} />
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
    </div>
  </div>
</div>
  )}



}

export default App;
