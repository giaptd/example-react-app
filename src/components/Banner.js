/**
 * Created by giapt on 5/25/2017.
 */
import React from 'react';

const Banner = ({appName})=>{
    return(
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    {appName.toLowerCase()}
                </h1>
                <p>My super slogan</p>
            </div>
        </div>
    );
}

export default Banner;