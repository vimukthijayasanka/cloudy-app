import { WeatherData } from "../useWeather";

export const getBackgroundImage = (weather: WeatherData | null) => {

    if (!weather) return "/background/default.jpg";

    const condition = weather.current.condition.text.toLowerCase();
    const isDay = weather.current.is_day === 1;

    if (condition.includes("sunny") || condition === "clear") {
        return isDay ? "/background/clear_day.jpg" : "/background/clear_night.jpg";
    }

    if (condition.includes("partly cloudy") || condition.includes("mist")) {
        return isDay ? "/background/partly_cloudy.jpg" : "/background/partly_cloudy_night.jpg";
    }

    if (condition.includes("cloudy") || condition.includes("overcast")) {
        return isDay ? "/background/cloudy.jpg" : "/background/cloudy_night.jpg";
    }

    if (
        condition.includes("light rain") ||
        condition.includes("drizzle") ||
        condition.includes("patchy rain")
    ) {
        return isDay ? "/background/light_rain_day.jpg" : "/background/light_rain_night.jpg";
    }

    if (
        condition.includes("moderate rain") ||
        condition.includes("heavy rain") ||
        condition.includes("torrential")
    ) {
        return isDay ? "/background/heavy_rain_day.jpg" : "/background/heavy_rain_night.jpg";
    }

    if (condition.includes("thunder")) {
        return isDay ? "/background/thunderstorm_day.jpg" : "/background/thunderstorm_night.jpg";
    }

    if (
        condition.includes("snow") ||
        condition.includes("blizzard") ||
        condition.includes("sleet") ||
        condition.includes("ice")
    ) {
        return isDay ? "/background/snow_day.jpg" : "/background/snow_night.jpg";
    }

    if (condition.includes("fog")) {
        return isDay ? "/background/fog_day.jpg" : "/background/fog_night.jpg";
    }

    return "/background/default.jpg";
};

export const getWeatherIcon = (weather: WeatherData) => {

    if (!weather) return "/default.png";

    const condition = weather.current.condition.text.toLowerCase();
    const isDay = weather.current.is_day === 1;

    if (condition.includes("sunny") || condition === "clear") {
        return isDay ? "/icon/clear_day.png" : "/icon/clear_night.png";
    }

    if (condition.includes("partly cloudy") || condition.includes("mist")) {
        return isDay ? "/icon/partly_cloudy.png" : "/icon/partly_cloudy_night.png";
    }

    if (condition.includes("cloudy") || condition.includes("overcast")) {
        return isDay ? "/icon/cloudy.png" : "/icon/cloudy_night.png";
    }

    if (
        condition.includes("light rain") ||
        condition.includes("drizzle") ||
        condition.includes("patchy rain")
    ) {
        return isDay ? "/icon/light_rain_day.png" : "/icon/light_rain_night.png";
    }

    if (
        condition.includes("moderate rain") ||
        condition.includes("heavy rain") ||
        condition.includes("torrential")
    ) {
        return isDay ? "/icon/heavy_rain_day.png" : "/icon/heavy_rain_night.png";
    }

    if (condition.includes("thunder")) {
        return isDay ? "/icon/thunderstorm_day.png" : "/icon/thunderstorm_night.png";
    }

    if (condition.includes("fog")) {
        return isDay ? "/icon/fog_day.png" : "/icon/fog_night.png";
    }

    return "/icon/default.png";
};
