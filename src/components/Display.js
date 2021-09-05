import React from "react";
import AppCss from "../styles/App.css";
import Time from './Time';

const Display = ({buttonClick, shows, fullName, bio, profession, imgSrc }) => {

  if(shows){
    return (
      <div className="container-fluid text-center">
        <div className="row"> 
          <span>Nom:  <h5 className="text-danger">{ fullName }</h5></span>
          <span>Biographie: <h5 className="text-danger">{bio}</h5></span>
          <span>Profession: <h5 className="text-danger">{profession}</h5></span>
        </div>
        <div>{imgSrc}</div>
      </div>
    )
  }else{
    return (
      <div className="mt-5" style={{textAlign:"center"}}>
        <button style={{padding:"0.9rem 5rem", fontSize:"1.5rem", cursor:"pointer", borderRadius:"50px", boxShadow:"0px 0px 4px #121314", border:"1px", background:"transparent"}} className="btn fw-bold" onClick={buttonClick}>Display profile</button>
        <div className="div">Le temps est: <Time /> </div>
      </div>
    )
  }
}
 

export default Display;

