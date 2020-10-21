import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import hotelImage1 from '../images/Image/Rectangle26.png'
import hotelImage2 from '../images/Image/Rectangle27.png'
import hotelImage3 from '../images/Image/Rectangle28.png'
import star from '../images/Icon/star_1_.png'
import GoogleMaps from '../GoogleMap/GoogleMaps';


const Destination = (props) => {
    const cityName = props.city ? props.city.name : '';
    return (
        <>
            <HeaderLogin></HeaderLogin>
            <div style={{ marginTop: '100px' }}>
                <div className="m-auto" style={{ borderBottom: '1px solid lightgray', width: '80%' }}></div>
            </div>
            <div className="col-md-10 m-auto">
                <div className="col-md-12 m-4">
                    <h2>{props.city ? props.city.name : ''}</h2>
                </div>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <div className="col-md-12 m-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={hotelImage1} width="90%" alt="" />
                                </div>
                                <div className="col-md-6 p-3">
                                    <h3>Light bright airy stylish apt & safe peaceful stay</h3>
                                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                    <p>Wif Air conditioning Kitchen</p>
                                    <p>Cancellation fexibility availiable</p>
                                    <div className="d-flex flex-row">
                                        <img src={star} alt="" />
                                        <h5>4.8 (10)</h5>
                                        <h5 className="pl-5">$34/</h5>
                                        <p>Night</p>
                                        <p className="pl-5" style={{ color: 'lightgray' }}>$167 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 m-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={hotelImage2} width="90%" alt="" />
                                </div>
                                <div className="col-md-6 p-3">
                                    <h3>Apartment in Lost Panorama</h3>
                                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                    <p>Wif Air conditioning Kitchen</p>
                                    <p>Cancellation fexibility availiable</p>
                                    <div className="d-flex flex-row">
                                        <img src={star} alt="" />
                                        <h5>4.8 (10)</h5>
                                        <h5 className="pl-5">$54/</h5>
                                        <p>Night</p>
                                        <p className="pl-5" style={{ color: 'lightgray' }}>$200 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 m-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={hotelImage3} width="90%" alt="" />
                                </div>
                                <div className="col-md-6 p-3">
                                    <h3>AR Lounge & Pool (r&r + b&b)</h3>
                                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                    <p>Wif Air conditioning Kitchen</p>
                                    <p>Cancellation fexibility availiable</p>
                                    <div className="d-flex flex-row">
                                        <img src={star} alt="" />
                                        <h5>4.8 (10)</h5>
                                        <h5 className="pl-5">$100/</h5>
                                        <p>Night</p>
                                        <p className="pl-5" style={{ color: 'lightgray' }}>$300 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <GoogleMaps cityName={cityName}></GoogleMaps>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destination;