
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import { Divider, Text } from 'react-native-elements';
import { Card } from "react-native-paper";

const Course = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);
    const [courses, setCourses] = useState([]);


    async function getCourses(text) {

        if (text.length < 3) {
            console.log("Search text must be at least 3 characters long.");
            return;
        }

        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'https://ubcexplorer.io/searchAny/' + text, true);
            request.onload = () => {
                if (request.status === 200) {
                    setCourses(JSON.parse(request.responseText));
                    resolve(courses); // Resolve the promise with the courses
                } else {
                    reject(`Error: ${request.status} ${request.statusText}`);
                }
            };
            request.onerror = () => reject("Network error.");
            request.send();
        });
    }


    useEffect(() => {
        setCourses([]);
        demo();
    }, [searchText]);

    async function demo() {

        await search();
    }


    async function search() {
        if (searchText == "") return;
        console.log("Searching for " + searchText);

        await new Promise(async (resolve, reject) => {
            setTimeout(async () => {
                await getCourses(searchText); // Wait for getCourses to complete
                for (let i = 0; i < courses.length; i++) {
                    // console.log(courses[i].code);
                }
                resolve();
            }, 0);
        });


    }


    const handleOnChangeText = (text) => {
        // Visible the spinner
        setSearchText(text);
        setSpinnerVisibility(true);

        // Implement your use-case here
        // After completing the use-case, set the spinner's visibility to false
        // This could be inside an async function or useEffect depending on your logic
    };


    // for (let i = 0; i < courses.length; i++) {
    //     console.log(courses[i].code);
    // }
    return (

        <ScrollView style={styles.scrollView} id="courses-container">


            <SearchBar

                fontSize={16}
                fontColor="#fdfdfd"
                iconColor="#fdfdfd"
                shadowColor="#282828"
                margin={8
                }
                // cancelIconColor="green"
                backgroundColor="white"
                spinnerVisibility={spinnerVisibility}
                //placeholder="Search any courses ..."
                fontFamily="BurbankBigCondensed-Black"
                // shadowStyle={styles.searchBarShadowStyle}
                onChangeText={handleOnChangeText}

            />


            <ScrollView style={styles.scrollView}>

                {courses.map((course, i) => {
                    {/* <Text>course.</Text> */ }

                    if (searchText.length >= 3) {
                        return (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('CoursesDetail', { course })}>
                                <Card key={i} style={styles.courseCard}>

                                    <Card.Title titleStyle={styles.courseText} title={course.code} />
                                    <Card.Content>
                                        <Divider horizontalInset={true} bold={true}></Divider>
                                        <Text style={styles.courseText}>{course.name}</Text>
                                        <Text style={styles.courseText}>Credit: {course.cred}</Text>
                                        <Divider horizontalInset={true} bold={true}></Divider>
                                    </Card.Content>
                                </Card>
                            </TouchableOpacity>


                        )
                    }
                })}

            </ScrollView>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    courseCard: {
        margin: 24,
        textAlign: "center",
        backgroundColor: "white"
    },

    courseTitle: {
        paddingTop: 24,
        margin: 10,
        fontSize: 36,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },

    courseText: {
        margin: 14,
        color: "black"
    },


    scrollView: {
        flex: 1,
    }
})


export default Course;