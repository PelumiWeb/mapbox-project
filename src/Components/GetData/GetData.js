import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GetData() {
    const url = "http://52.90.82.235:8888/geotourdata/json.cfm?h=-107,37,s,en,3A771765"

    axios.get(url).then(response => {
        console.log(response)
    })
   
    return (
        <div>
            
        </div>
    )
}

export default GetData
