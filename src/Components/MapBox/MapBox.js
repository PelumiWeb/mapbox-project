import React, {useState,useEffect,useContext} from 'react'
import ReactMapGL,{Marker, Popup} from 'react-map-gl'
import axios from 'axios'
import './MapBox.css'
import RoomIcon from '@material-ui/icons/Room';
import {StoreContext} from '../../stores/store'

import { useObserver } from 'mobx-react';


function MapBox () {
    const store = useContext(StoreContext)

    const [viewport, setViewport] = useState({
        width: 480,
        height: 350,
        latitude: 37.93778,
        longitude: -107.81136,
        zoom: 15,
    })
   

    const accessKey ='pk.eyJ1Ijoid3d3bWFzdGVyMSIsImEiOiJjazZmbmxhYngwYjQxM2xtdDdwMjJzYjdnIn0._QtAdUTg9NtC9_R8Caq6Ng'

    const [data, setData] = useState(null)
    const [selectedCoordinates, setSelectedCoordinates] = useState(null)
    const [currentSong, setCurrentSong] = useState(null)
    useEffect(() => {
        const url = "https://52-90-82-235.maverickmaven.com/geotourdata/json.cfm?h=-107,37,s,en,3A771765"

        axios.get(url).then(response => {
      const features = response.data.features.filter(elem => {
        return  elem.type === 'Feature'
      })
      setData(features)
    })
}, [setData])

    return useObserver(() => (
        <div>
        <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={accessKey}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      onViewportChange={viewport => {
          setViewport(viewport)
      }} >
       {data?.map(data => 
          (<Marker key={data.id} latitude={data.geometry.coordinates[1]}
          longitude={data.geometry.coordinates[0]}>
              <div className="marker"
              onClick={
      (e) => {
          e.preventDefault()
  setSelectedCoordinates(data)
    store.addSong(selectedCoordinates?.assets[0].audio)
    store.addImage(data.photo)
    store.addName(data.name)
      } }>
                 <RoomIcon />
              </div>
          </Marker>)
         )}

         {selectedCoordinates &&(<Popup 

         latitude={selectedCoordinates.geometry.coordinates[1]}
         longitude={selectedCoordinates.geometry.coordinates[0]}
         onClose={(e) =>{
             setSelectedCoordinates(null)
         }}
         >
             <div>
             </div>
         </Popup>)}
       </ReactMapGL>
       </div>

    ))

}

export default MapBox