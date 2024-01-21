import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header containerStyle={styles.header}
            backgroundImage={{uri: "https://logowik.com/content/uploads/images/ubc-university-of-british-columbia3090.logowik.com.webp"}} />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Courses")
                }>
                    <Text style={styles.btnTxt}>
                        Courses
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Weather")
                }>
                    <Text style={styles.btnTxt}>
                        Weather
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Library")
                }>
                    <Text style={styles.btnTxt}>
                        Library
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Contacts")
                }>
                    <Text style={styles.btnTxt}>
                        Contacts
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={handleUPassPress}>
                    <Text style={styles.btnTxt}>
                        UPass
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Dining")
                }>
                    <Text style={styles.btnTxt}>
                        Dining
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Events")
                }>
                    <Text style={styles.btnTxt}>
                        Events
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const handleUPassPress = () => {
    Linking.openURL('https://upassbc.translink.ca/');
};

const styles = StyleSheet.create({
    header: {
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 45,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    // container: {
    //     // flexDirection: "row", // allows multiple buttons on a line
    //     // flexWrap: "wrap", // overflowing button goes to next line
    //     // justifyContent: "space-evenly", 
    //     // alignItems: "center"
    // },
    btnContainer: {
        flexDirection: "row", // allows multiple buttons on a line
        flexWrap: "wrap", // overflowing button goes to next line
        justifyContent: "space-evenly", 
        marginTop: 80 // centering buttons in middle vertically
    },
    btn: {
        elevation: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6488ea", //3232a8
        margin: 15,
        borderRadius: 10,
        height: 100,
        width: 100,
    },
    btnTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default Dashboard;