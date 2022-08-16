import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Residentinfo = ({ resident }) => {
  return (
    <li >
      <div className="container">
          <div className="row">
          <div className="col-md-6">
            <div className="cards">
              <img src={resident.image} alt="" />
              <div className="info">
                <p>
                  <b>{resident.name}</b>
                </p>
                <p>
                  <span className="circle-green"></span>
                  {resident.status} - {resident.species}
                </p>
                <p className="description">origin:</p>
                <p>{resident.origin.name}</p>
                <p className="description">Episodes where appear:</p>
                <p>{resident.episode.length}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        
      
    </li>
  );
};

export default Residentinfo;

