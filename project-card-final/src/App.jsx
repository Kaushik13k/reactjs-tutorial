import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXbox,
  faPlaystation,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import gtaImage from "./assets/gta-5.jpg";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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
  const scrollContainerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const updateButtonStates = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;

      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
    updateButtonStates();
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
    updateButtonStates();
  };

  useEffect(() => {
    updateButtonStates();

    const handleScroll = () => updateButtonStates();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <div className="relative w-full">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <FontAwesomeIcon
            onClick={scrollLeft}
            className={`bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 ${
              isLeftDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            icon={faCircleArrowLeft}
            disabled={isLeftDisabled}
          />
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <FontAwesomeIcon
            onClick={scrollRight}
            className={`bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 ${
              isRightDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            icon={faCircleArrowRight}
            disabled={isRightDisabled}
          />
        </div>

        <div
          className="overflow-x-auto w-full hide-scrollbar"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-6 md:space-x-10">
            {games.map((game, index) => (
              <div
                key={index}
                className="flex flex-col items-start w-64 md:w-80 flex-shrink-0"
              >
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
                      className="rounded-lg w-full h-52 object-cover"
                    />

                    <div className="mt-3 ml-1">
                      <div className="flex space-x-2">
                        {game.icons.map((icon, iconIndex) => {
                          const [isHovered, setIsHovered] = useState(false);

                          return (
                            <FontAwesomeIcon
                              key={iconIndex}
                              icon={icon}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              style={{
                                color: isHovered ? "#ff0000" : "#6b7280",
                              }}
                              className="w-5 h-5"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 ml-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {index + 1}. {game.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {truncateDescription(game.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
