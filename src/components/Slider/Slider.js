import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import cox from '../images/Image/Rectangle.png'
import sreemangal from '../images/Image/Sreemongol.png'
import sundarbon from '../images/Image/sundorbon.png'
import './Slider.css';

import Booking from '../Booking/Booking';
import CityInfo from '../FakeData/CityInfo';


const Cox = (props) => {
    const [cities,setCities] = useState(CityInfo);
    const [singleCity,setSingleCity] = useState({});
    const [clicked,setClicked] = useState(false);
    const images = [cox,sreemangal,sundarbon]
    for(let i = 0; i<images.length;i++){
        cities[i].photo = images[i] 
    }
    const handleCity = (city,isClick) =>{
        setSingleCity(city);
        setClicked(isClick);
        props.setCity(city)
    } 
    return (
        <>
        <div style={{ margin: '0% 0% 0% 9%', overflow: 'hidden' }}>
            <div className="row">
                {
                     clicked === false && <div className="col-md-5 text-light banner-text">
                                            <h1>COX'S BAZAR</h1>
                                            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                                            <Button variant="warning" style={{ marginTop: '5%',backgroundColor:'#F9A51A',color:'black'}}>Booking <FontAwesomeIcon icon={faArrowRight} /></Button>
                                        </div>
                }
                {
                    clicked === true && <div className="col-md-5 text-light banner-text">
                                            <h1>{singleCity.name}</h1>
                                            <p>{singleCity.description}</p>
                                        </div>
                }
                {
                    clicked === false && cities.map(city => <div className="col-md-2" onClick={()=>handleCity(city,true)}>
                            <div className="slider d-flex align-items-end p-3" style={{backgroundImage: `url(${city.photo})`,backgroundSize:'cover'}}>
                            <h3>{city.name}</h3>
                            </div>
                        </div>
                    )
                }
                <div className="col-md-4" style={{marginLeft:'10%'}}>
                {
                    clicked === true && <Booking></Booking>
                }
                </div>
            </div>
        </div>
        {
            clicked === false && <div className="text-center text-light" style={{fontSize:'30px',marginTop:'100px',paddingBottom:'12%'}}>
                                    <FontAwesomeIcon className="mx-2" icon={faArrowCircleLeft}  />
                                    <FontAwesomeIcon className="mx-2" icon={faArrowCircleRight} />
                                </div>
        }
        
        </>
    );
};

export default Cox;