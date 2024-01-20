import { useState } from "react";
import { View, Text } from "react-native";

const LAT = 49.2606;
const LONG = -123.2460;
const KEY = "74f069bf11e7c490ef33aa301a6cec35";

const Weather = () => {
    const [weatherData, setWeatherData] = useState("");

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + LAT + "&lon=" + LONG + "&appid=" + KEY)
        .then(response => response.json())
        .then(data => {
            setWeatherData(data)
        })

    return (
        <View>
            <Text>{weatherData}</Text>
        </View>
    )
}

export default Weather;
