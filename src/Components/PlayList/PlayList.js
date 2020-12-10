import React from 'react'
import './PlayList.css'

function PlayList({displaySongs,data}) {
    return (
     <div className={displaySongs ? "Playlist Playlist_show" : "Playlist"}>

         <ul className="Paylist-list">
             {data.map(data => (
             <li>
             <div className="plItem">
                <span className="trackNumber">01</span> 
                <span className="trackTitle">{data.name}</span> 
                <span className="trackTDuration">8:23</span>                 
              </div>
              </li>)
             )}
             
        </ul>   
    </div>
    )
}

export default PlayList
