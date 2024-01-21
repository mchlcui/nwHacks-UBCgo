import { React, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";

const LAT = 49.2606;
const LONG = -123.2460;
const KEY = "74f069bf11e7c490ef33aa301a6cec35";
const themeColor = "#3232a8";

const Weather = () => {
    const [temp, setTemp] = useState(0.0);
    const [low, setLow] = useState(0.0);
    const [high, setHigh] = useState(0.0);
    const [weatherType, setWeatherType] = useState("");


    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + LAT + "&lon=" + LONG + "&appid=" + KEY)
        .then(response => response.json())
        .then(data => {
            setTemp(data.main.temp);
            setLow(data.main.temp_min);
            setHigh(data.main.temp_max);
            setWeatherType(data.weather.main);
        })

    return (
        <View>
            <Card style={styles.weatherCard}>
                <Card.Title style={styles.weatherTitle} title="UBC" />
                <Card.Content>
                    <Text variant="bodymedium">
                        current temperature: {(temp - 273.15).toFixed(1)}
                        low: {(low - 273.15).toFixed(1)}
                        high: {(high - 273.15).toFixed(1)}
                        weather type: {weatherType}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherCard: {
        margin: 24,
        textAlign: "center"
    },

    weatherTitle: {
        textAlign: "center"
    }
})

export default Weather;
