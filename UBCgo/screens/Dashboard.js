import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
    return (
        <View>
            {/* <Text>My Nuts</Text> */}
            <TouchableOpacity style={styles.btnContainer} onPress={() =>
                navigation.navigate("Courses")
            }>
                <Text style={styles.btnStyle}>
                    Courses
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer} onPress={() =>
                navigation.navigate("Weather")
            }>
                <Text style={styles.btnStyle}>
                    Weather
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer} onPress={() =>
                navigation.navigate("Library")
            }>
                <Text style={styles.btnStyle}>
                    Library
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer} onPress={() =>
                navigation.navigate("Contacts")
            }>
                <Text style={styles.btnStyle}>
                    Contacts
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer} onPress={() =>
                navigation.navigate("Dining")
            }>
                <Text style={styles.btnStyle}>
                    Dining
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        elevation: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3232a8",
        borderRadius: 10,
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        height: 100,
        width: 100
    },
    btnStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default Dashboard;