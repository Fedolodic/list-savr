import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

function App() {
    return (
        <div>
            <h1>List<span className="highlight">Savr</span></h1>
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