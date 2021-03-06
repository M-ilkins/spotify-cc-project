import React from 'react';
import './Track.css';

export class Track extends React.Component {

    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval){
           return <button className='Track-action'>-</button>
        } else {
            return <button className='Track-action' onClick={this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }


    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Track Name: {this.props.track.name}</h3>
                    <p>Artist: {this.props.track.artist} | Album: {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}