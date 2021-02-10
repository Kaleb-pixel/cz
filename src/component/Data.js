import React from 'react';

import maxresdefault from '../Images/maxresdefault.jpg';
import Nike_Centre  from '../Images/Nike_Centre.jpg';
import puma from '../Images/puma.jpg';
import World_Cup from '../Images/World_Cup.jpg';
import clothes from '../Images/clothes.jpg';
import fila from '../Images/fila.jpg';
import addidas from '../Images/addidas.jpg';
import boots from '../Images/boots.jpg';
import nike from '../Images/nike.jpg';

const Data= [
    {
        
        name:' Womens Spring Outfit',
        id:1,
        item:  
        <div className="all grid-wr">
        <div className="box flex all">
            <a href="#">
                <img src={maxresdefault} width={400} height={200} alt="" />
                <br />
                <h1> Womens Spring Outfit <br />
                Price=2000birr
                </h1>
            </a>
            <div className="box flex next">
            Adult Tie-Dye
<br />
            Tie dye is everywhere this season, 
            but it's not all about psychedelia.
             Designers like Ganni have elevated the print with slinky silk materials 
             and grown-up cuts that won't make you feel like a Woodstock attendee. 
             To get the look, reach for work-ready pieces like a sleek dress. 
             Then pair it with modern accessories like sharp sunglasses and heavy metal bags.
             <br />
             <br />
             Size: M,L,XL,XXL
            </div>

        </div>
        </div>
    },
    {
       name:'Womens Fila Shoes',
         id:2,
       item:
        <div className="all grid-wr">
        <div className="box flex all">
            <a href="#">
                    <img src={fila} alt="" />
                    <br />
                    <h1>Womens Fila Shoes <br />
                    Price=2000birr
                    </h1>
            </a>
            <div className="box flex next">
            Disruptor 2
            <br />
            Fila rolls out a wide variety of designs,
             the Fila Disruptor 2 is amongst those unconventional designs.
              Built with a mixture of a sturdy sole and a unique material for the body, 
              this unique piece of beauty separates itself from the pack. With the Disruptor 2, 
              you can move through craggy terrains without worries, and with that extra feel of comfort. 
              If you’re looking to include an attractive combination of vitality and glamour to your wardrobe, 
              then the Disruptor 2 should be your next pick-up.
              <br />
              <br />
              Size: 38,39,40,41,42,43

            </div>
        </div>
        </div>

    },
   
    {
        name:'Men World Cup Football Kit' ,
        id:3,
        item:
        <div className="all grid-wr">
        <div className="box flex all">
                <a href ="#">
                    <img src={World_Cup}  width={350} height={250} alt="" />
                    <br />
                    <h1>Men World Cup Football Kit <br />
                    Price=2000birr
                    </h1>
                 </a>
                 <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>

        </div>
        </div>
    },
    {
        name:'Nike Air Foamposite 1',
        id:4,
        item:
        <div className="all grid-wr">
        <div className="box flex all">
            <a href="#">
                <img src={nike} alt="" width={"45%"} height="50%" />
                <br/>

                <h1>
                    Nike Air Foamposite 1 <br />
                    Price=2000birr
                </h1>
            </a>
            <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>
        </div>
        </div>

    },
    {
        name:'Adidas Sweater',
        id:5,
        item:
        <div className="all grid-wr">
        <div className="box flex all">
            <a href="#">
        <img src={addidas}  width={350} height={350} alt="" />
        <br />
        <h1>Adidas Sweater <br />
        Price=2000birr
        </h1>
        </a>
        <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>
        
        </div>
        </div>
    },
    {
        name:'Nike Store',
        id:6,
        item:
        <div className="all grid-wr">
        <div className="box flex all">
            <a href="#">
                  <img src={Nike_Centre} width={250} height={300} alt="" />
                    <br />
                    <h1>Nike Store <br />
                    Price=2000birr
                    </h1>
            </a>
            <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>
        </div>
        </div>
    },
  
    {
        name:'Nike KD ',
        id:7,
        item:
        <div className="all grid-wr">
        <div className="box flex all">
        

        <a href ="#">
        <img src={boots} alt="" width={"55%"} height="50%" />
        <br />
        <h1>Nike KD <br />
        Price=2000birr
         </h1>
        </a>                                               
        <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>
        </div>
        </div>
    },
   
   
    {
        name:'Puma',
        id:8,
        item: 
        <div className="all grid-wr">
        <div className="box flex all">
        
        <a href="#">
        <img src={puma} alt="" />
        <br />
        <h1>
            Puma <br /> 
            Price=2000birr
        </h1>
        </a>
        <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>
       
        </div>
        </div>
    },
    {
        name:'Adidas Store ',
        id:9,
        item: 
        <div className="all grid-wr">
        <div className="box flex all">
            <a href="#">
                <img src={clothes} alt="" />
                <br />
                <h1>Adidas Store  <br />
                Price=2000birr
                </h1>
            </a>
            <div className="box flex">
                sdklnvsovnwiovnsoivnwovisvsdc'sKJCSPOC 
                WEFWEFWFFFFFFFFFFFFFFFFFF
                W EWDCWDFWEFEFXGQERGQRGQXEGRX
                WGXQWGXQGQ3GQERGQFXG4ZTRG
                ZQEFXS6JUFJ6BON,TBMNBAXCVRBTNULYBKYJHTGHBJKNBYJHVGCFVSB
                NJYBHVGCVBSDNKDJBTSHVRAGCEGVBNBYJTH
            </div>
        </div>
        </div>

    }

]
export default Data;