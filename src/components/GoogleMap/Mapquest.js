import React, { useEffect } from 'react';

const Mapquest = ({height, width,center,tileLayer,zoom,apiKey}) => {
    useEffect(() => {
        //api key 
        window.L.mapquest.key = apiKey;
        const map = window.L.mapquest.map('map',{
            center,
            layers:  window.L.mapquest.tileLayer(tileLayer),
            zoom,
        });
        map.addControl(window.L.mapquest.control());
    },[])
    return (
        <div>
            <div id="map" style={{width,height}}>
                <p>this is the map</p>
            </div>
        </div>
    );
};

export default Mapquest;