import React from 'react'
import './Timeline.css';
import Sugesstions from './Sugesstions';
import Posts from './posts/Posts';




function Timeline(){
    return <div className='timeline'>
        
        <div className='timeline_left'>
            <div className='timeline_posts'>
                <Posts/>
                
            </div>
        </div>
        <div className='timeline_right'>
            <Sugesstions/>
            
            

        </div>
    </div>;
   
}
export default Timeline;