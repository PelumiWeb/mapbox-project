import React, {useEffect, useState} from 'react'
import Map from '../Map/Map'
import './DisplayBox.css'
import PlayList from '../PlayList/PlayList'
import axios from 'axios'

function DisplayBox({displayImage, displayMap, displaySongs}) {
    const [data, setData] = useState([])
    
useEffect(() => {

    const url = "http://52.90.82.235:8888/geotourdata/json.cfm?h=-107,37,s,en,3A771765"

    axios.get(url).then(response => {
        let features = response.data.features.filter(elem => {
            return  elem.type === 'Feature'
          })
          setData(features)
        //   features.map(feature => {
        //       setData(feature)
        //   })
        //   let Series = response.data.features.filter(elem => {
        //     return  elem.type === 'Series'
        //   })
       
         
    })
    console.log(data)
   

},[])



    return (
        
     <div className={displayImage || displayMap || displaySongs? "display_box display_box-show" : "show_box"}>
            <div className={displayImage ? "image image_show" : "image"}>
                <img src="https://images.unsplash.com/photo-1607348881296-78b064fbd811?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className={displayMap ? 'Map Map_show' : 'Map'}>
            <Map />
            </div>
                <PlayList displaySongs={displaySongs} 
                data={data}/>
        <div className="display_box-playlist">
        </div>
       
    </div>

   

    )
}

export default DisplayBox


//rce & rcc