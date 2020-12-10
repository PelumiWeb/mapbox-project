import React , {useEffect, useState} from 'react'
import ReactAudio from 'react-audio-player'
import 'react-jinke-music-player/assets/index.css'
import './Music.css'
import axios from 'axios'


function Music({CurrentSong}) {
    // const [data, setData] = useState()
    // const [song, setSong] = useState([])
    // //s/    

    // useEffect(() => {
    //     const url = "http://52.90.82.235:8888/geotourdata/json.cfm?h=-107,37,s,en,3A771765"

    //     axios.get(url).then(response => {
       
    //   let features = response.data.features.filter(elem => {
    //     return  elem.type === 'Feature'
    //   })
    //   let series = response.data.features.filter(elem => {
    //     return  elem.type === 'Series'
    //   })
      
    //   features.map(el => {
    //      return {...el}
    //   })

    //   series.map(el => {
    //     return {...el}
    // })

    // setData(features)
    // })

       
       
    

    // },[setData, setSong])


// console.log(data)
        





    
    return (
        <div className='Music'>
           <ReactAudio 
           className={'audio'}
           src={`${CurrentSong}`}
           controls
           autoPlay
           /> 
        </div>
    )
}

export default Music
