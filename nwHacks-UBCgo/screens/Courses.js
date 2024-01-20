import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Courses = () => {
    return (
        <View>
            <Text>Balls</Text>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnStyle}>
                    Courses
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
      color:"white",
      fontWeight: "bold",
      fontSize: 16
    }
  });

export default Courses;