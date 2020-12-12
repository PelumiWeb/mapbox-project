import React, { useState, useContext } from 'react'
import './PlayList.css'
import WordLimit from 'react-word-limit'
import {StoreContext} from '../../stores/store'
import { useObserver } from 'mobx-react'

function PlayList({displaySongs,data}) {
    const [playList, setPlayList] = useState(null)
    const store = useContext(StoreContext)
    const [currentSongIndex, setCurrentSongIndex] = useState(null) 

  
    return useObserver(() => (
        <React.Fragment>
        <div className={displaySongs ? "Playlist Playlist_show" : "Playlist"}>
         <ul className="Paylist-list">    
             {data?.map((data, index) => (
             <li 
             onClick={() => {
                 store.addSong(data.assets[0].audio)
                 store.addImage(data.photo)
                 store.addName(data.name)
                 store.addSongIndex(index)
             }}
             key={data?.id}>
             <div className="plItem">
                 {console.log(currentSongIndex)}
                <span className="trackNumber">{index + 1}</span> 
                <span className="trackTitle">
                   <WordLimit limit={15}>
                    {data ? data.name : "word"}
                    </WordLimit> 
                 </span> 
                <span className="trackTDuration">8:23</span>    
              </div>
              </li>)
              )}
        </ul>   
    </div>
    <div>
    </div>
    </React.Fragment>
    ))
   
}

export default PlayList
