import React from 'react';
import compass from "../Assets/compass-icon.png"

const About=()=>{
    return(
        <div className='row align-items-center' style={{ marginTop: 170, marginBottom: 170}}>
            <div className='col-md-6 col-lg-6 col-12'>
                <img src={compass} alt="compass" className='img-fluid' style={{ width: 120, marginBottom: 30}}/>
                <h1 style={{ fontSize: 32, fontFamily: 'Druk Wide Bold'}}>OUR AGENCY</h1>
            </div>
            <div className='col-md-6 col-lg-6 col-12'>
            <h5 style={{ fontFamily: 'GT America Trial'}}>We give BD leaders the intelligence they need to keep our country safe</h5>
            
            <p style={{ marginTop: 40}}>As the world’s premier foreign intelligence agency, the work we do at NSI is vital to BD national security. We collect and analyze foreign intelligence and conduct covert action. BD policymakers, including the President of the United States, make policy decisions informed by the information we provide.</p>
                <button type="button" class="btn btn-danger" style={{ fontFamily: 'GT America Trial'}}>LEARN MORE</button>
            </div>
        </div>
    );
};
export default About;