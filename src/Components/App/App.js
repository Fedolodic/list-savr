import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

function App() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                {/*SearchBar component*/}
                <SearchBar/>
                <div className="App-playlist">
                    {/*SearchResults component*/}
                    <SearchResults/>
                    {/*Playlist component*/}
                    <Playlist/>
                </div>
            </div>
        </div>
    );
}

export default App;
