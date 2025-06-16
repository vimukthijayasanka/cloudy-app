import {useState} from "react";
import axios from "axios";

export interface WeatherData {
    location: {
        name: string;
    };
    current: {
        temp_c: number;
        is_day: number;
        condition: {
            icon: string;
            text: string;
        };
        humidity: number;
        wind_mph: number;
        uv: number;
    };
}

export const useWeather = () => {

    const [city, setCity] = useState('Colombo');
    const [weather, setWeather] = useState<WeatherData | null>( null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_URL = import.meta.env.VITE_WEATHER_API_URL;

    const fetchWeather = async () => {

        if (!city) return;
        try {
            const response = await axios.get<WeatherData>( WEATHER_URL ,{
                params: {
                    key: API_KEY,
                    q: city
                }
            });
            console.log(WEATHER_URL, API_KEY)
            setWeather(response.data);
            setError(null);
        } catch {
            setWeather(null);
            setError("City not found");
        } finally {
            setLoading(false);
        }
    };

    return {city, setCity, weather, error, loading, fetchWeather};
};