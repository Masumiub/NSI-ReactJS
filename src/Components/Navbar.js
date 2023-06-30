import React from 'react';
// import {Link} from 'react-router-dom';
import logo from '../Assets/logo.svg.png'
import compass from "../Assets/compass-icon.png"

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg"  style={{padding: 10, backgroundColor: "#000"}}>
            <div class="container-fluid">
                <img src={compass} alt="headerImg" className='img-fluid' style={{margin: 15, width: 50}}/>
                <a class="navbar-brand text-white" href="#" style={{ fontSize: 25, fontFamily: 'Druk Wide Bold'}}>NSI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#" style={{ fontFamily: 'GT America Trial'}}>HOME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#" style={{ fontFamily: 'GT America Trial'}} >ABOUT</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#" style={{ fontFamily: 'GT America Trial'}} >NEWS</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="" style={{ fontFamily: 'GT America Trial'}} >CAREER</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#" style={{ fontFamily: 'GT America Trial'}}>CONTACT</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    
                    <button type="button" class="btn btn-danger" style={{ fontFamily: 'GT America Trial'}}>REPORT INFO</button>
                </span>
                </div>
            </div>
            </nav>
    );
};

export default Navbar;