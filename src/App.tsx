import './App.css'
import { IoSearch, IoSunny, IoWater } from 'react-icons/io5';
import { FaWind } from 'react-icons/fa';
import 'animate.css'
import { useWeather } from "./useWeather.tsx";
import {useEffect} from "react";
function App() {

    const { city, setCity, weather, error, loading, fetchWeather } = useWeather();

    useEffect(() => {
        fetchWeather();
    },[])

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
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      onKeyDown={(e) => {
                          if (e.key === 'Enter') fetchWeather();
                      }}
                      className="px-5 py-2 rounded-full shadow-lg w-48 md:w-72 bg-white/80
                      text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 "
                  />
                  <span onClick={fetchWeather} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                      <IoSearch className={'h-7 w-7 text-gray-800'}/>
          </span>
              </div>
          </div>

          {/* Main Weather Card */}
          {weather && (
          <div className="flex flex-col items-center text-center mb-6 animate__animated animate__fadeInDown
          hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-lg
              p-6 w-full mx-auto border border-white/20 inline-block"
                  style={{ minWidth: '200px', maxWidth: '90vw', width: 'auto' }}>
                  <img src="/icon.png" alt="Weather Icon" className="w-30 mb-2 inline" />
                  <h2 className="text-5xl font-semibold text-gray-800 inline">{weather.location.name}</h2>
                  <p className="text-7xl font-bold text-gray-800">{weather.current.temp_c}°</p>
              </div>
          </div>
          )}

          {/* Error */}
          {error && (
              <div className="text-center text-red-500 text-lg animate__animated animate__shakeX mb-4">
                  {error}
              </div>
          )}

          {/* Weather Details Grid */}
          {weather && (
          <div className="flex flex-col items-center text-center animate__animated animate__fadeInUp">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl font-[poppins]">
                  {/* Humidity */}
                  <div className="bg-white/80 rounded-2xl p-6 text-center shadow-md
                  hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                      <p className="text-gray-700 text-lg font-medium mb-1">Humidity</p>
                      <IoWater className="text-blue-500 text-3xl mb-2 mx-auto" />
                      <p className="text-2xl font-bold text-gray-800">{weather.current.humidity}%</p>
                  </div>

                  {/* Wind */}
                  <div className="bg-white/80 rounded-2xl p-6 text-center shadow-md
                  hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                      <p className="text-gray-700 text-lg font-medium mb-1">Wind</p>
                      <FaWind className="text-cyan-500 text-3xl mb-2 mx-auto" />
                      <p className="text-2xl font-bold text-gray-800">{weather.current.wind_mph} <span className="text-lg font-normal">mph</span></p>
                  </div>

                  {/* UV Index */}
                  <div className="bg-white/80 rounded-2xl p-6 text-center shadow-md
                  hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                      <p className="text-gray-700 text-lg font-medium mb-1">UV Index</p>
                      <IoSunny className="text-amber-500 text-3xl mb-2 mx-auto" />
                      <p className="text-2xl font-bold text-gray-800">{weather.current.uv} <span className="text-sm font-normal">Moderate</span></p>
                  </div>
              </div>
          </div>
          )}

          {/* Loading */}
          {loading && (
              <div className="text-center text-white text-lg animate__animated animate__fadeIn loader">
                  Loading...
              </div>
          )}

          {/* Footer */}
          <footer className="text-center text-sm text-white mt-4 space-y-1">
              <p>© 2025 All Rights Reserved</p>
              <p>Designed by Vimukthi Jayasanka</p>
          </footer>

      </div>
  );
};


export default App
