import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Divider } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const LibraryComponent = ({name, hours, address, website}) => {
    libraryData = {
        tableHead: [name],
        tableData: [
          ["Open from " + hours[0] + " to " + hours[1]],
          [address],
          // Button redirecting to library website
          [<TouchableOpacity>
            <Text style={styles.bodyText}>
                <Text onPress={() => Linking.openURL(website)}> More Details >> </Text> 
            </Text>
           </TouchableOpacity>]
        ]
    }
    
    return (
        <View style={styles.container}>
            <Table style={styles.tableStyle}>
                <Row data={libraryData.tableHead} style={styles.head} textStyle={styles.headerText}/>
                <Divider/>
                <Rows data={libraryData.tableData} style={styles.body} textStyle={styles.bodyText}/>
                <Divider/>
            </Table>
        </View>
    )
}

const Library = () => {
    return (
        <View>
            <LibraryComponent name={"Irving K. Barber Learning Centre"} hours={["6am", "12am"]} 
            address={"1961 East Mall"} website={"https://ikblc.ubc.ca/"}> </LibraryComponent>

            <LibraryComponent name={"Koerner Library"} hours={["7:30am", "10pm"]} address={"1958 Main Mall"} 
            website={"https://koerner.library.ubc.ca/"}> </LibraryComponent>

        <LibraryComponent name={"Woodward Library"} hours={["8am", "10pm"]} address={"2198 Health Sciences Mall"} 
            website={"https://woodward.library.ubc.ca/"}> </LibraryComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    tableStyle: {
        marginBottom: 20
    },
    head: { 
        height: 40, 
        backgroundColor: "#3232a8"
    },
    headerText: { 
        textAlign: "center",
        fontWeight: "bold",
        color: "#d1d124"
     },
     body: {
        height: 40, 
        // border: "1px gray solid"
        // backgroundColor: "#adada5"
     },
     bodyText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "brlack"
     }
  });

export default Library;