import React from 'react';
import Scroll from './Scroll.js'
import eb4350baf2809fc5de8b2b8ebaba1f99 from '../Images/eb4350baf2809fc5de8b2b8ebaba1f99.jpg';
import SearchBox from './SearchBox.js';
import Map from './map.js';


function Main (){
        return(
          <div>  
            <div className="all cover">
                <div id="img1"><img  src={eb4350baf2809fc5de8b2b8ebaba1f99} width="100%" height="100%" alt="" /></div> 
                <div id="welcome"> WELCOME <br /> TO COMFORT ZONE
                <SearchBox />
                </div>
                </div>
                <Scroll>
              <Map />
              </Scroll>
            </div>
        )
      }
     
   

export default Main;