
import React, { useEffect, useState } from "react";
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Card, Divider } from "react-native-paper";


function CoursesDetail({ route, navigation }) {

    const [grade, setGrade] = useState([]);
    const [high, setHigh] = useState(0); // State for highest grade
    const [low, setLow] = useState(0); // State for lowest grade
    const [average, setAverage] = useState(0); // State for average grade


    const { course } = route.params;

    let dependents = "";

    let avg = 0;

    for (let i = 0; i < course.depn.length; i++) {
        dependents += course.depn[i] + ", ";
    }

    const handlePress = (url) => {
        Linking.openURL(url).catch((err) => console.error("An error occurred", err));
    };

    async function getGrades() {
        try {
            let response = await fetch("https://ubcgrades.com/api/v3/grades/UBCV/2022W/" + course.code.substr(0, 4) + "/" + course.code.substr(5, 6));
            if (response.ok) {
                let data = await response.json();
                setGrade(data);
                if (data && data.length > 0) {
                    setHigh(data[0].high);
                    setLow(data[0].low);
                    setAverage(data[0].average);
                }
            } else {

                alert("This Course No Longer Exists After 2022W");
            }
        } catch (error) {

            console.error("Network error:", error);
        }
    }


    useEffect(() => {
        getGrades();
        // Cleanup function
        return () => {
            setGrade([]);
            setHigh(0);
            setLow(0);
            setAverage(0);
        };
    }, []);

    async function demo() {

        await search();
    }



    async function search() {

        await new Promise(async (resolve, reject) => {
            setTimeout(async () => {
                await getGrades(); // Wait for getCourses to complete

                resolve();
            }, 0);
        });


    }


    console.log(average);
    return (
        <View>
            <TouchableOpacity onPress={() => handlePress(course.link)}>
                <Card style={styles.courseCard}>

                    <Card.Title titleStyle={styles.courseTitle} title={course.code} />
                    <Divider horizontalInset={true} bold={true}></Divider>
                    <Card.Content>
                        <Text style={styles.textTop}>Name: {course.name}{"\n"}</Text>
                        <Text>Credit:{course.cred}{"\n"}</Text>
                        <Text>Prereq: {course.prer}{"\n"}</Text>
                        <Text>Coreq:{course.creq}{"\n"}</Text>
                        <Text>Dependent:{dependents}{"\n"}</Text>
                        <Text>Description: {course.desc}{"\n"}</Text>
                        <Text>Course Average: {average}%{"\n"}</Text>
                        <Text>Course High: {high}%{"\n"}</Text>
                        <Text style={styles.textBottom}>Course Low: {low}%</Text>
                        <Divider horizontalInset={true} bold={true}></Divider>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    courseCard: {
        margin: 24,
        textAlign: "center"
    },

    courseTitle: {
        paddingTop: 12,
        paddingBottom: 12,
        margin: 24,
        fontSize: 36,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },


    scrollView: {
        flex: 1,
    },

    textBottom: {
        marginBottom: 12
    },

    textTop: {
        marginTop: 12
    }
})

export default CoursesDetail;