
import React from "react";
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Card, Divider } from "react-native-paper";

function CoursesDetail({ route, navigation }) {
    
    const { course } = route.params;

    let dependents = "";

    for (let i = 0; i < course.depn.length; i++) {
        dependents += course.depn[i] + ", ";
    }

    const handlePress = (url) => {
        Linking.openURL(url).catch((err) => console.error("An error occurred", err));
      };

    console.log(course);
    return (
      <View>
        <TouchableOpacity onPress={() => handlePress(course.link)}>
            <Card style={styles.courseCard}>
                                
                <Card.Title style={styles.courseTitle} title={course.code} />
                <Divider horizontalInset={true} bold={true}></Divider>
                <Card.Content>
                    <Text>Name: {course.name}</Text>
                    <Text>Credit:{course.cred}</Text>
                    <Text>Prereq: {course.prer}</Text>
                    <Text>Coreq:{course.creq}</Text>
                    <Text>Dependent:{dependents}</Text>
                    <Text>Description: {course.desc}</Text>
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
        paddingTop: 24,
        margin: 24,
        fontSize: 36,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    

    scrollView: {
        flex: 1,
    },
})

  export default CoursesDetail;