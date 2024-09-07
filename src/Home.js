import React from 'react';

import './Home.css';
import Sidenav from './Navigation/Sidenav';
import Timeline from './Timeline/Timeline';
import Story from './Story/Story';


function Home(){
    return(
        <div className='homepage'>
            <div className='homepage_story'>
                <Story/>

            </div>
    
            <div className="homepage_nav">
                <Sidenav/>

            </div>
           
            <div className="homepage_timeline">
                
                
                <Timeline/>

            </div>

        </div>
        

    
    );
}

export default Home;