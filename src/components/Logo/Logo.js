import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div
      className='ma4 mt0'
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 50 }}
        style={{ height: 115, width: 115 }}
      >
        <div className='Tilt-inner pa3'>
          <img style={{ paddingTop: "5px" }} src={brain} alt='brain Logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
