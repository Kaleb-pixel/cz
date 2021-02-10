import React from 'react';
import comfort_zone_logo from '../Images/comfort_zone_logo.png';



function Header (){
    
    return(
        <div>
             <div className="all  sticky">
                <ul className="main ">
                    <li className="pull">
                        <a href="zone.html">
                            <img src={comfort_zone_logo} alt="website-logo" 
                            width="50vw" height="50vh" />
                            </a> </li>
                    <li id="home" >Home</li>
                    <li id="about"><a href="#" >About</a></li>
                    
                    <li className="push "><a href='../login.html' >Login</a></li>
                    
                    <li className="push2"><a href="" >Cart</a></li>

                </ul> 
            </div>
           
        </div>
    )
}

export default Header;