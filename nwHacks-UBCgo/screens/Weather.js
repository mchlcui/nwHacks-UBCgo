import { React, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Divider } from "react-native-paper";

const LAT = 49.2606;
const LONG = -123.2460;
const KEY = "74f069bf11e7c490ef33aa301a6cec35";
const themeColor = "#3232a8";

const Weather = () => {
    const [temp, setTemp] = useState(0.0);
    const [low, setLow] = useState(0.0);
    const [high, setHigh] = useState(0.0);
    const [weatherType, setWeatherType] = useState("");
    const [pressure, setPressure] = useState(0.0);
    const [humidity, setHumidity] = useState(0.0);
    const [windSpeed, setWindSpeed] = useState(0.0);


    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + LAT + "&lon=" + LONG + "&appid=" + KEY)
        .then(response => response.json())
        .then(data => {
            setTemp(data.main.temp);
            setLow(data.main.temp_min);
            setHigh(data.main.temp_max);
            setWeatherType(data.weather[0].main);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
            console.log(data);
        })

    return (
        <View>
            <Card style={styles.weatherCard}>
                <Card.Title titleStyle={styles.weatherTitle} subtitleStyle={styles.weatherSubtitle} title="UBC" subtitle="Vancouver, B.C." />
                <Divider horizontalInset={true} bold={true}></Divider>
                <Card.Content>
                    <Text style={styles.currentTemp}>
                        {(temp - 273.15).toFixed(1)}° C
                    </Text>
                    <Text style={styles.body}>
                        L: {(low - 273.15).toFixed(1)} H: {(high - 273.15).toFixed(1)}</Text>
                    <Text style={styles.text}>
                        {weatherType}
                    </Text>
                    <Text style={styles.other}>
                        Pressure: {pressure} hPa {"\n"} Humidity: {humidity}% {"\n"} Wind speed: {windSpeed} m/s
                    </Text>
                    <Divider horizontalInset={true} bold={true}></Divider>
                </Card.Content>
            </Card>

            <Card>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherCard: {
        margin: 24,
    },

    weatherTitle: {
        paddingTop: 24,
        margin: 24,
        fontSize: 36,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },

    weatherSubtitle: {
        textAlign: "center",
        marginBottom: 8
    },

    currentTemp: {
        marginTop: 56,
        textAlign: "center",
        fontSize: 28
    },

    body: {
        textAlign: "center",
    },

    text: {
        textAlign: "center",
        marginBottom: 28,
        fontWeight: "700"
    },

    other: {
        textAlign: "center"
    }
})

export default Weather;
