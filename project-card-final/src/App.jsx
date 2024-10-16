// TODO:
// 2. Increase the image size and get the heading and description out
// 3. Handle the side pagination for full-innerWidth and bottom for mobile
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXbox,
  faPlaystation,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import gtaImage from "./assets/gta-5.jpg";

const games = [
  {
    name: "Grand Theft Auto V",
    description:
      "An action-adventure game set in an open world with a rich storyline and expansive gameplay options hello world.",
    icons: [faXbox, faApple, faPlaystation],
  },
  {
    name: "Red Dead Redemption 2",
    description:
      "A western-themed action-adventure game that follows Arthur Morgan and his gang in a world full of challenges.",
    icons: [faApple, faPlaystation],
  },
  {
    name: "Halo Infinite",
    description:
      "A sci-fi first-person shooter game featuring Master Chief and an expansive universe to explore hello world hlw.",
    icons: [faXbox, faPlaystation],
  },
];

const truncateDescription = (description) => {
  if (description.length > 99) {
    return description.slice(0, 99) + "...";
  }
  return description;
};

const App = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100 space-y-6 md:space-y-0 md:space-x-6 md:m-2">
      {games.map((game, index) => (
        <div key={index} className="flex flex-col items-start w-64 md:w-72">
          <div className="bg-white rounded-lg shadow-md w-full">
            <div className="flex items-center justify-start bg-gray-200 p-2 rounded-t-lg">
              <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>

              <div className="px-2">
                <input
                  type="text"
                  className="w-full px-4 py-0.5 bg-white border border-gray-200 rounded-md text-sm"
                  disabled
                />
              </div>
            </div>

            <div className="p-3">
              <img
                src={gtaImage}
                alt="gta img"
                className="rounded-lg w-full h-40 object-cover"
              />

              <div className="mt-2">
                <div className="flex space-x-2 mb-2">
                  {game.icons.map((icon, iconIndex) => {
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                      <FontAwesomeIcon
                        key={iconIndex}
                        icon={icon}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ color: isHovered ? "#ff0000" : "#6b7280" }}
                        className="w-5 h-5"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Align the game name and description with the card */}
          <div className="mt-2 ml-1">
            <h3 className="text-lg font-semibold text-gray-800">{game.name}</h3>
            <p className="text-sm text-gray-600">
              {truncateDescription(game.description)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
