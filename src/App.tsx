import './App.css'
import { IoSearch } from 'react-icons/io5';
import 'animate.css'

function App() {

  return (
      <div
          className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed px-4 md:px-16
          py-6 flex flex-col justify-between"
          style={{
              backgroundImage: "url('/anime_style.png')"
          }}
      >
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-white">Cloudy</h1>
              <div className="relative">
                  {/*Search bar*/}
                  <input
                      type="text"
                      placeholder="Search a city"
                      className="px-5 py-2 rounded-full shadow-lg w-48 md:w-72 bg-white/80
                      text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer "
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                      <IoSearch className={'h-7 w-7 text-gray-800'}/>
          </span>
              </div>
          </div>

          {/* Main Weather Card */}
          <div className="flex flex-col items-center text-center mb-6 animate__animated animate__fadeInDown
          hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-lg
              p-6 max-w-md w-full mx-auto border border-white/20">
                  <img src="/icon.png" alt="Weather Icon" className="w-30 mb-2 inline" />
                  <h2 className="text-5xl font-semibold text-gray-800 inline">Colombo</h2>
                  <p className="text-7xl font-bold text-gray-800">28°</p>
              </div>
          </div>

      </div>
  );
};


export default App
