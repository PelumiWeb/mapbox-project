import { useObserver } from 'mobx-react'
import React , {useEffect, useState, useContext} from 'react'
import ReactAudio from 'react-audio-player'
import './Music.css'
import {StoreContext} from '../../stores/store' 
import getBlobDuration from 'get-blob-duration'





function Music({}) {
  const store = useContext(StoreContext)
 
  // (async function() {
  //   const duration = await getBlobDuration(store.currentSong)
  //   console.log(duration + ' seconds')
  // })()  

   return useObserver(() => (
    <div className='Music'>
    <ReactAudio 
    className={'audio'}
    src={store.currentSong}
    controls
    autoPlay
    
    /> 
 </div>
   ))
             
  
}

export default Music
