import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [
                {
                    name: 'Baba O\'Riley',
                    artist: 'The Who',
                    album: 'Who\'s Next',
                    id: 1
                },
                {
                    name: 'The Less I Know The Better',
                    artist: 'Tame Impala',
                    album: 'Currents',
                    id: 2
                },
                {
                    name: 'Head Over Boots',
                    artist: 'Jon Pardi',
                    album: 'California Sunrise',
                    id: 3
                }
            ],
            playlistName: 'Type Your New Playlist Name',
            playlistTracks: [
                {
                    name: 'Runaway',
                    artist: 'Kanye West',
                    album: 'My Beautiful Dark Twisted Fantasy',
                    id: 4
                },
                {
                    name: 'Canon in D, P.37',
                    artist: 'Johann Pachelbel, Orpheus Chamber Orchestra',
                    album: 'Yellow Lounge',
                    id: 5
                },
                {
                    name: 'I Gotta Feeling',
                    artist: 'Black Eyed Peas',
                    album: 'THE E.N.D. (THE ENERGY NEVER DIES)',
                    id: 6
                }
            ]
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }

        tracks.push(track);
        this.setState(
            {playlistTracks: tracks}
        );
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

        this.setState(
            {playlistTracks: tracks}
        );
    }

    updatePlaylistName(name) {
        this.setState(
            {playlistName: name}
        );
    }

    savePlaylist() {
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    search(term) {
        Spotify.search(term).then(searchResults => {
            this.setState({
                searchResults: searchResults
            });
        })
    }

    render() {
        return (
            <div>
                <h1>List<span className="highlight">Savr</span></h1>
                <div className="App">
                    {/*SearchBar component*/}
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        {/*SearchResults component*/}
                        <SearchResults searchResults={this.state.searchResults}
                                       onAdd={this.addTrack}/>
                        {/*Playlist component*/}
                        <Playlist playlistName={this.state.playlistName}
                                  playlistTracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}
                                  onNameChange={this.updatePlaylistName}
                                  onSave={this.savePlaylist}/>
                    </div>
                </div>
            </div>
        );
    }
}