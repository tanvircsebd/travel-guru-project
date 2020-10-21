import React, { useState } from 'react';
import Mapquest from './/Mapquest';
import Location from './Location';

function GoogleMaps(props) {
  const [lat,setLat] = useState('19.033333');
  const [lng,setLng] = useState('98.183334');
  let markers = [];

  //muibica
  const setCenter = (lat,lng) => {
    setLat(lat)
    setLng(lng);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat,lng),12);
  };
  const addMarker = (lat,lng,title,subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat,lng),
      {
        text:title || '',
        subtext:subtitle || '',
        postion: 'right',
        type: 'marker',
        Icon:{
          primaryColor:'#a8190f',
          secondaryColor:'red',
          size:'md'
        }
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'))
    
    markers.push(marker)
  };
  return (
    <div>
      
      <Location setCenter={setCenter} setMarker={addMarker} cityName={props.cityName}></Location>
      <Mapquest 
        height="80vh"
        width="100%"
        center={[lat,lng]}
        tileLayer={'map'}
        zoom="12"
        apiKey="AGNBAtkbA8bUTNAkemNGDKkw8R021GOD"
      />
    </div>
  );
}

export default GoogleMaps;
