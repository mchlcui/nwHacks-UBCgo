import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';

const Dashboard = ({ navigation }) => {
    const iconSize = 30;

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
                    <Ionicons style={styles.icon} name="school-outline" size={iconSize} color={"white"}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Weather")
                }>
                    <Text style={styles.btnTxt}>
                        Weather
                    </Text>
                    <Ionicons style={styles.icon} name="rainy-outline" size={iconSize} color={"white"}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Library")
                }>
                    <Text style={styles.btnTxt}>
                        Library
                    </Text>
                    <Ionicons style={styles.icon} name="library-outline" size={iconSize} color={"white"}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Contacts")
                }>
                    <Text style={styles.btnTxt}>
                        Contacts
                    </Text>
                    <Ionicons style={styles.icon} name="people-outline" size={iconSize} color={"white"}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={handleUPassPress}>
                    <Text style={styles.btnTxt}>
                        UPass
                    </Text>
                    <Ionicons style={styles.icon} name="bus-outline" size={iconSize} color={"white"}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Dining")
                }>
                    <Text style={styles.btnTxt}>
                        Dining
                    </Text>
                    <Ionicons style={styles.icon} name="fast-food-outline" size={iconSize} color={"white"}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate("Events")
                }>
                    <Text style={styles.btnTxt}>
                        Events
                    </Text>
                    <Ionicons style={styles.icon} name="megaphone-outline" size={iconSize} color={"white"}></Ionicons>
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
    }, 
    icon: {
        marginTop: 10
    }
});

export default Dashboard;