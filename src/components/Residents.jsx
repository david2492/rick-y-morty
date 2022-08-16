import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Residentinfo from "./Residentinfo";

const Residents = () => {
  const [residents, setresidents] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setresidents(res.data.results));
  }, []);
  console.log(residents);

  return (
    <div>
      <h3>Residents</h3>
      <ul>
            {residents.map((resident) => (
              <Residentinfo resident={resident} /> 
            ))}
          
      </ul>
      
    </div>
  );
};

export default Residents;
