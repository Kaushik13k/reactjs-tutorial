import gtaImage from "./assets/gta-5.jpg";

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-row space-x-6">
        <div className="flex rounded-xl shadow-lg overflow-hidden">
          <div>
            <img
              src={gtaImage}
              alt="gta img"
              className="w-96 h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="bg-black text-white w-80 h-full flex flex-col px-6 py-14">
            <h3 className="font-bold text-2xl mb-4">
              The Best Hotels and Resorts in Europe
            </h3>
            <p className="text-sm flex-grow">
              Explore Europe’s finest accommodations, from the sun-drenched
              shores of the French Riviera to the historic elegance of London
              and the tranquil beauty of the Bavarian Alps.
            </p>
            <p className="text-xs mt-4">Oct 12, 2023</p>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div>
            <img
              src={gtaImage}
              alt="gta img"
              className="w-52 h-48 object-cover rounded-l-lg"
            />
          </div>
          <div className="bg-black text-white w-52 h-48 flex flex-col p-6">
            <h3 className="font-bold text-xl mb-4">
              The Best Hotels in Budapest
            </h3>
            <p className="text-xs flex-grow">
              Boutique hotels have mushroomed in Budapest in recent years, and
              on...
            </p>
            <p className="text-xs mt-4">Oct 12, 2023</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300">
          View All Blogs
        </button>
      </div>
    </div>
  );
}

export default App;
