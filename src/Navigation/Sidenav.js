import React from 'react';

import './Sidenav.css';
import instagram from '../images/instaletterlogo2.png';
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import myimage from '../images/myimg.jpg';




function Sidenav(){
    return (

        <div className='sidenav'>
            <img src={instagram} className='sidenav_logo' alt='logo'/>

        
            <div className='sidenav_buttons'>
                <button className='sidenav_button'>
                    <IoMdHome/>
                    <span> Home</span>
                </button>
                <button className='sidenav_button'>
                    <FaSearch/>
                    <span> Search</span>
                </button>
                <button className='sidenav_button'>
                    <MdExplore/>
                    <span>Explore</span>
                </button>
                <button className='sidenav_button'>
                    <MdOutlineVideoLibrary/>
                    <span>Reels</span>
                </button>
                <button className='sidenav_button'>
                    <MdOutlineMessage/>
                    <span>Mesaage</span>
                </button>
                <button className='sidenav_button'>
                    <FaRegHeart/>
                    <span>Message</span>
                </button>
                <button className='sidenav_button'>
                    <FaPlusCircle/>
                    <span  >Create</span>
                </button>
                <button className='sidenav_button'>
                    <img src={myimage} className='myprofile' />
                    <span  >Profile</span>
                </button>
            </div>
            <div className='sidenav_more'>
                <button className='sidenav_button'>
                    <IoMdMenu/>
                    <span>More</span>
                </button>
            </div>
        </div>
    );


}
export default Sidenav;