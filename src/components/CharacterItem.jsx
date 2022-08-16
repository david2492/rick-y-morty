import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CharacterItem = ({ locationurl }) => {
  const [characterdata, setcharacterdata] = useState({});
  let component = null;

  useEffect(() => {
    axios.get(locationurl).then((res) => setcharacterdata(res.data));
  }, []);

  console.log(characterdata);

  if (characterdata.status === "Alive") {
    component = "circle-green";
  }
  if (characterdata.status === "unknown") {
    component = "circle-grey";
  }
  if (characterdata.status === "Dead") {
    component = "circle-red";
  }

  return (
    
        <div className="container-cards">
            <div className="cards">
              <img src={characterdata.image} alt="" />
              <div className="info">
                <p>
                  <b>{characterdata?.name}</b>
                </p>
                <p>
                  <span className={component}></span>
                  {characterdata.status} - {characterdata.species}
                </p>
                <p className="description">origin:</p>
                <p>{characterdata.origin?.name}</p>
                <p className="description">Episodes where appear:</p>
                <p>{characterdata.episode?.length}</p>
              </div>
            </div>
         
            </div>
  );
};

export default CharacterItem;
