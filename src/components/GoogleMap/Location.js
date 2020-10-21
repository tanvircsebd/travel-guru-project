import React from 'react';

const Miubicacion = ({setCenter,setMarker,cityName}) => {
    const findMe = () =>{
        if(!navigator.geolocation){
            alert('this is nevigator');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                if(cityName === "COX'S BAZAR"){
                    const latitude = -30.009230;
                    const longitude = 153.183838;
                    
                    if(setCenter){
                        setCenter(latitude,longitude)
                    }
                    if(setMarker){
                        setMarker(latitude,longitude,'Your location',`lat:${latitude} ,lng:${longitude}`)
                    }
                }
                else if(cityName === "SREEMANGAL"){
                    const latitude = 24.894930;
                    const longitude = 91.868706;
                   
                    if(setCenter){
                        setCenter(latitude,longitude)
                    }
                    if(setMarker){
                        setMarker(latitude,longitude,'Your location',`lat:${latitude} ,lng:${longitude}`)
                    }
                }
                else if(cityName === "SUNDARBANS"){
                    const latitude = 21.949726;
                    const longitude = 89.173327;
                    
                    if(setCenter){
                        setCenter(latitude,longitude)
                    }
                    if(setMarker){
                        setMarker(latitude,longitude,'Your location',`lat:${latitude} ,lng:${longitude}`)
                    }
                }else{
                    const {latitude ,longitude} = position.coords;
                    
                    if(setCenter){
                        setCenter(latitude,longitude)
                    }
                    if(setMarker){
                        setMarker(latitude,longitude,'Your location',`lat:${latitude} ,lng:${longitude}`)
                    }
                }
                 
            },
            (error) =>{
                alert("error al obtner la ubicacion")
            }
        )
    };

    return (
        <div>
            {
                findMe()
            }
        </div>
    );
};

export default Miubicacion;