import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
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
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>List<span className="highlight">Savr</span></h1>
                <div className="App">
                    {/*SearchBar component*/}
                    <SearchBar/>
                    <div className="App-playlist">
                        {/*SearchResults component*/}
                        <SearchResults searchResults={this.state.searchResults}/>
                        {/*Playlist component*/}
                        <Playlist/>
                    </div>
                </div>
            </div>
        );
    }
}