import React from 'react';
import Data from './Data.js';
import Pictures from './pictures.js';



function Map (){

    return(
         Data.map(item => <Pictures key={item.id} Pictures={item} />)

    );
}

export default Map;