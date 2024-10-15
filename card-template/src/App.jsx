import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import gtaImage from "./assets/gta-5.jpg";

const App = () => {
  return (
    <div className="bg-black rounded-lg shadow-md max-w-sm text-white m-4 p-5">
      <img src={gtaImage} alt="gta img" className="rounded-t-lg" />
      <div className="p-5">
        <div className="space-x-3">
          <FontAwesomeIcon
            icon={faXbox}
            style={{ color: "#FFD43B" }}
            className="w-5 h-5"
          />
          <FontAwesomeIcon
            icon={faXbox}
            style={{ color: "#FFD43B" }}
            className="w-5 h-5"
          />
          <FontAwesomeIcon
            icon={faXbox}
            style={{ color: "#FFD43B" }}
            className="w-5 h-5"
          />
        </div>
        <h3 className="text-2xl font-bold">Grand Theft Auto V</h3>
      </div>
    </div>
  );
};

export default App;
