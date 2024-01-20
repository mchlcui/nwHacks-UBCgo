
import { Text } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

function Course() {

    let courses = [];

    let request = new XMLHttpRequest();
    request.open('GET', 'https://ubcexplorer.io/searchAny/MATH', true);
    request.send();
    request.onload = () => {
        // console.log(request.responseText);
        if (request.status === 200) {
            courses = JSON.parse(request.responseText);
            console.log(courses[1].code);
        } else {
            console.log(`error ${request.status} ${request.statusText}`);
        }
    }
    console.log("hello");

    

    return (
        <div>
            <Text>Alex is fatTTTT</Text>

            <SearchBar
            placeholder="Search here"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
            />  

        </div>
        
    );
}

export default Course;

