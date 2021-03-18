import React, {useCallback, useEffect, useState} from "react";



export const Features = (props) => {

    useEffect(() => {

    },[])


    const logo = [  'img/scroll-images/1mirroir.png','img/scroll-images/2cadre-bois.png', 'img/scroll-images/3boitier.png', 'img/scroll-images/4panneau-solaire.png',
    ]

    return (


        <div className="abcd2" style={{ height: '100vh', width: '100%', overflow: 'hidden'}}  >
            <div className="typewriter">
                <h1>&nbsp;Composants</h1>
            </div>

            <img className={'img1'} src={logo[0]} />


            <img className={'img2'} src={logo[1]} />


            <img className={'img3'} src={logo[2]} />


            <img className={'img4'} src={logo[3]} />


        </div>




  )
}
