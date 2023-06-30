import React from 'react';
import img1 from '../Assets/img-1.jpg';
import img2 from '../Assets/img-2.jpg';
import img3 from '../Assets/img-3.jpg';

const divStyle = {
    marginTop: 170,
    marginBottom: 170,
    backgroundColor: '#000'
}

const imgstyle = {
    border: 0,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#000'
}

function News(){
    return(
        <div className='row align-items-start' style={divStyle}>
            <h1 style={{ fontSize: 32, fontFamily: 'Druk Wide Bold', color: '#fff', textAlign: "left"}}>LATEST NEWS</h1>

            <div className='col-lg-4 col-md-4 col-12' style={{textAlign: 'left'}}>
                <div className='card' style={{backgroundColor: '#000'}}>
                    <img src={img1} alt="newsimg" className='img-fluid' style={imgstyle}/>
                    
                </div>
                <h5 style={{textAlign: "left", fontFamily: 'GT America Trial'}}>Know about NSI's Mission, History</h5>
                <button type="button" class="btn btn-danger btn-sm" style={{ fontFamily: 'GT America Trial', marginTop: 20}}>Read More</button>
            </div>

            <div className='col-lg-4 col-md-4 col-12' style={{textAlign: 'left'}}>
                <div className='card' style={{backgroundColor: '#000'}}>
                    <img src={img2} alt="newsimg" className='img-fluid' style={imgstyle}/>
                    
                </div>
                <h5 style={{textAlign: "left", fontFamily: 'GT America Trial'}}>Deployment of First Military Satellite</h5>
                <button type="button" class="btn btn-danger btn-sm" style={{ fontFamily: 'GT America Trial', marginTop: 20}}>Read More</button>
            </div>

            <div className='col-lg-4 col-md-4 col-12' style={{textAlign: 'left'}}>
                <div className='card' style={{backgroundColor: '#000'}}>
                    <img src={img3} alt="newsimg" className='img-fluid' style={imgstyle}/>
                    
                </div>
                <h5 style={{textAlign: "left", fontFamily: 'GT America Trial'}}>Remembering the Legacy in NSI</h5>
                <button type="button" class="btn btn-danger btn-sm" style={{ fontFamily: 'GT America Trial', marginTop: 20}}>Read More</button>
            </div>

        </div>
    );
};

export default News