import './App.css'
import { IoSearch, IoReload } from 'react-icons/io5';
import { MdError } from "react-icons/md";
import 'animate.css'
import { useWeather } from "./useWeather.tsx";
import {useEffect, useMemo} from "react";
import { getBackgroundImage } from './utils/WeatherImages.ts';
import WeatherDetailCard from "./components/WeatherDetailCard.tsx";
import WeatherCard from "./components/WeatherCard.tsx";

function App() {

    const { city, setCity, weather, error, loading, fetchWeather } = useWeather();

    useEffect(() => {
        fetchWeather();
    },[])

    const bgImage = useMemo(() => getBackgroundImage(weather), [weather]);

    return (
      <div
          className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed px-4 md:px-16
          py-6 flex flex-col justify-between"
          style={{
              backgroundImage: `url('${bgImage}')`
          }}
      >
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-white cursor-pointer">Cloudy</h1>
              <div className="flex items-center gap-3">
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
                  {/* Refresh Button */}
                  <button
                      onClick={fetchWeather}
                      className="flex items-center justify-center p-2 bg-white/60 hover:bg-white/80 backdrop-blur-md
      rounded-full shadow-md transition duration-300 ease-in-out"
                      aria-label="Refresh Weather"
                      title="Refresh"
                  >
                      <IoReload className="h-5 w-5 text-gray-800" />
                  </button>
          </div>
          </div>

          {/* Main Weather Card */}
          {weather && (
          <div className="flex flex-col items-center text-center mb-6 animate__animated animate__fadeInDown
          hover:scale-105 transition-transform duration-300 ease-in-out">
            <WeatherCard weather={weather}/>
          </div>
          )}

          {/* Error */}
          {error && (
              <div className="relative bg-white/70 backdrop-blur-md border-l-4 border-red-500 rounded-2xl p-6 text-center shadow-xl max-w-md mx-auto
      hover:-translate-y-2 transition-transform duration-300 ease-in-out animate__animated animate__shakeX">

                  <div className="flex items-center justify-center space-x-3 mb-3 text-red-600">
                      <MdError className={"text-2xl"}/>
                      <span className="text-lg font-semibold">{error}</span>
                  </div>

                  <p className="text-gray-700 text-sm">
                      Please check the input and try again.
                  </p>
              </div>
          )}

          {/* Weather Details Grid */}
          {weather && (
          <div className="flex flex-col items-center text-center animate__animated animate__fadeInUp">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl font-[poppins]">
                 <WeatherDetailCard humidity={weather.current.humidity} wind={weather.current.wind_mph} uv={weather.current.uv}></WeatherDetailCard>
              </div>
          </div>
          )}

          {/* Loading */}
          {loading && (
              <div className="flex justify-center items-center h-32 animate__animated animate__fadeIn">
                  <div className="loader"></div>
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
