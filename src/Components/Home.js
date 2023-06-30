import React from 'react';
import Navbar from './Navbar';
import About from './About';
import headerImg from '../Assets/banner.jpg'
import compass from "../Assets/compass-icon.png"
import net from "../Assets/net.jpg"
import userIcon from "../Assets/userIcon.png"
import News from './News'

const Home=()=>{

    return(
    <div className='body'>
        <Navbar/>
        <div className='container'>
            <div className='row align-items-center' style={{ marginTop: 170, marginBottom: 170}}>
                <div className='col-md-6 col-lg-6 col-12'>
                    <h1 style={{ fontSize: 52, fontFamily: 'Druk Wide Bold'}}>WE ARE THE NATION'S FIRST LINE OF DEFENSE</h1>
                    <h5 style={{ fontFamily: 'GT America Trial'}}>We accomplish what others cannot accomplish and go where others cannot go.</h5>
                    <p style={{ marginTop: 40}}>A career at NSI is unlike any other. We are looking for people from all backgrounds and walks of life to carry out the work of a Nation.</p>
                    <button type="button" class="btn btn-danger" style={{ fontFamily: 'GT America Trial'}}>FIND YOUR CALLING</button>
                </div>
                <div className='col-md-6 col-lg-6 col-12'>
                    <div className='divImg'>
                        <img src={headerImg} alt="headerImg" className='img-fluid' style={{ width: 540}}/>
                    </div>
                </div>
            </div>
            <hr/>
            <About/>
            <hr/>
            <div className='row align-items-center' style={{ marginTop: 170, marginBottom: 170}}>

                <div className='col-md-6 col-lg-6 col-12'>
                    <img src={userIcon} alt="headerImg" className='img-fluid' style={{ width: 100, marginBottom: 30}}/>
                    <h1 style={{ fontSize: 32, fontFamily: 'Druk Wide Bold'}}>OUR LEGACY</h1>
                </div>

                <div className='col-md-6 col-lg-6 col-12'>
                    
                    <h5 style={{ fontFamily: 'GT America Trial'}}>NSI’s legacy is one of brave individuals dedicated to freedom, fulfilling our intelligence mission with ingenuity and grit</h5>
                
                    <p style={{ marginTop: 40}}>As the world’s premier foreign intelligence agency, the work we do at NSI is vital to BD national security. We collect and analyze foreign intelligence and conduct covert action. BD policymakers, including the President of Bangladesh, make policy decisions informed by the information we provide.</p>
                    <button type="button" class="btn btn-danger" style={{ fontFamily: 'GT America Trial'}}>LEARN MORE</button>
                </div>


            </div>

            <hr/>
            <News/>
            <hr/>

            <div className='row align-items-center' style={{ marginTop: 170, marginBottom: 170}}>
                <div className='col-md-6 col-lg-6 col-12'>
                    <h1 style={{ fontSize: 32, fontFamily: 'Druk Wide Bold'}}>FACTBOOK</h1>
                    
                    <p style={{ marginTop: 40}}>Explore the globe, NSI-style. Learn about the world’s regions, countries, oceans, and so much more. BD policymakers, including the President of Bangladesh, make policy decisions informed by the information we provide.</p>
                    <button type="button" class="btn btn-danger" style={{ fontFamily: 'GT America Trial'}}>VISIT FACTBOOK</button>
                </div>

                <div className='col-md-6 col-lg-6 col-12'>
                    <div className='divImg'>
                        <img src={net} alt="network" className='img-fluid' style={{width: 540}}/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default Home