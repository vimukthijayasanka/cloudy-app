import { IoWater, IoSunny } from "react-icons/io5";
import { FaWind } from "react-icons/fa";

interface WeatherDetailProps {
    humidity: number;
    wind: number;
    uv: number;
}

function weatherDetailCard({ humidity, wind, uv }: WeatherDetailProps) {

    const details = [
        {
            label: "Humidity",
            value: `${humidity}%`,
            icon: <IoWater className="text-blue-500 text-3xl mb-2 mx-auto" />,
        },
        {
            label: "Wind",
            value: `${wind} mph`,
            icon: <FaWind className="text-cyan-500 text-3xl mb-2 mx-auto" />,
        },
        {
            label: "UV Index",
            value: `${uv}`,
            icon: <IoSunny className="text-amber-500 text-3xl mb-2 mx-auto" />,
        },
    ];

    return(
        <>
            {details.map((detail, index) => (
            <div key={index}
                className="bg-white/80 rounded-2xl p-6 text-center shadow-md
                  hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                <p className="text-gray-700 text-lg font-medium mb-1">{detail.label}</p>
                {detail.icon}
                <p className="text-2xl font-bold text-gray-800">{detail.value}</p>
            </div>
            ))}
        </>
    );
}

export default weatherDetailCard;