import React from 'react';
// import {Link} from 'react-router-dom';
import compass from "../Assets/compass-icon.png"

function Footer(){
    return(
    <div style={{backgroundColor: '#000', color: '#fff', padding: 40}}>
        <div class="container" >
            <footer class="row row-cols-5 py-5 border-top">
                <div class="col">
                    <img src={compass} alt="headerImg" className='img-fluid' style={{margin: 15, width: 90}}/>
                    
                <p>&copy; 2023 NSI</p>
                </div>

                <div class="col">

                </div>

                <div class="col">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">News</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Career</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                </ul>
                </div>

                <div class="col">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">News</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Career</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                </ul>
                </div>

                <div class="col">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">News</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Career</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                </ul>
                </div>
            </footer>
            </div>
            </div>
    
    );
};

export default Footer;