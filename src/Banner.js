import React from 'react';
import "./Banner.css";


function Banner() {

    function truncate(string, n){
      return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header 
      className="banner" 
      style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://pyxis.nymag.com/v1/imgs/472/022/717a089b39b7837738e5dceef4d10f497e-06-altered-carbon-background.rhorizontal.w700.jpg")`,
      backgroundPosition: "center center",
    }}>
      
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner_discription"> {truncate(`This is a test descriptionThis is a test descriptionThis is a test description
        This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />

    </header>
  )
}

export default Banner