import {getWeatherIcon} from "../utils/WeatherImages.ts";
import {WeatherData} from "../useWeather.tsx";

interface WeatherCardProps {
    weather: WeatherData;
}

function WeatherCard({weather}: WeatherCardProps) {
    return(
        <>
            <div className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-lg
              p-6 w-full mx-auto border border-white/20 inline-block"
                 style={{ minWidth: '200px', maxWidth: '90vw', width: 'auto' }}>
                <img loading={"lazy"} src={`${getWeatherIcon(weather)}`} alt="Weather Icon" className="w-30 mb-2 inline" />
                <h2 className="text-5xl font-semibold text-white inline">{weather.location.name}</h2>
                <p className="text-7xl font-bold text-white">{weather.current.temp_c}°</p>
            </div>
        </>
    )
}

export default WeatherCard;