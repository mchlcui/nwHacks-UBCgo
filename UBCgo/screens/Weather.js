import { React, useState } from "react";
import { StyleSheet, View, Text, Linking, TouchableOpacity } from "react-native";
import { Card, Divider } from "react-native-paper";

const LAT = 49.2606;
const LONG = -123.2460;
const KEY = "74f069bf11e7c490ef33aa301a6cec35";
const themeColor = "#6488ea";

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
                        Pressure: {pressure} hPa {"\n\n"} Humidity: {humidity}% {"\n\n"} Wind speed: {windSpeed} m/s {"\n"}
                    </Text>
                    <Divider horizontalInset={true} bold={true}></Divider>
                </Card.Content>
            </Card>

            <Card style={styles.linksCard}>
                <TouchableOpacity onPress={() =>
                    Linking.openURL("https://ready.ubc.ca/take-action/extreme-weather/")}>
                    <Text style={styles.links}>
                        UBC Extreme Weather Precautions
                    </Text>
                </TouchableOpacity>
            </Card>

            <Card style={styles.linksCard}>
                <TouchableOpacity onPress={() =>
                    Linking.openURL("https://www.ubc.ca/campus-notifications/")}>
                    <Text style={styles.links}>
                        UBC Campus Notifications
                    </Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherCard: {
        margin: 24,
        marginBottom: 48,
        shadowColor: "black",
        shadowRadius: 10
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
        marginBottom: 10
    },

    currentTemp: {
        marginTop: 25,
        marginBottom: 10,
        textAlign: "center",
        fontSize: 28
    },

    body: {
        marginBottom: 5,
        textAlign: "center",
    },

    text: {
        textAlign: "center",
        marginBottom: 28,
        fontWeight: "700"
    },

    other: {
        textAlign: "center"
    },

    links: {
        fontSize: 16,
        margin: 8,
        textAlign: 'center',
        color: 'blue'
    },

    linksCard: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 8,
        padding: 10,
        shadowColor: "black",
        shadowRadius: 10
    }
})

export default Weather;
