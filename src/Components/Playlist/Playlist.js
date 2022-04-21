import React from 'react';
import './Playlist.css';
import { Track } from '../Track/Track';
import { Tracklist } from '../Tracklist/Tracklist';

export class Playlist extends React.Component {
    render() {
        return ( <div className="Playlist">
            <input defaultValue={this.props.playlistName}/>
            <Tracklist tracks={this.props.playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div> )
    }
}