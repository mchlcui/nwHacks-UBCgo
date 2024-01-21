import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Divider, Card, Button, Title } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const LibraryComponent = ({ name, hours, address, website }) => {
    libraryData = {
        tableHead: [name],
        tableData: [
            ["Open from " + hours[0] + " to " + hours[1]],
            [address],
            // Button redirecting to library website
            [<TouchableOpacity>
                <Text style={styles.bodyText}>
                    <Text onPress={() => Linking.openURL(website)}> More Details! </Text>
                </Text>
            </TouchableOpacity>]
        ]
    }

    return (
        <View style={styles.container}>
            <Table style={styles.tableStyle}>
                <Row data={libraryData.tableHead} style={styles.head} textStyle={styles.headerText} />
                <Divider />
                <Rows data={libraryData.tableData} style={styles.body} textStyle={styles.bodyText} />
                <Divider />
            </Table>
        </View>
    )
}

const LibraryCard = ({ name, hours, address, website, img }) => {
    return (
            <Card style={styles.cardContainer}>
                <Card.Title title={name} subtitle={address} titleStyle={styles.cardTitle}/>

                <Card.Content>
                <Text variant="titleLarge">Open from {hours[0]} to {hours[1]}</Text>
                <Text style={styles.websiteStyle}variant="titleLarge" onPress={() => Linking.openURL(website)}>More Details! </Text>
                </Card.Content>

                <Card.Cover source={{ uri: img }} />
                {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions> */}
            </Card>
    );
}

const Library = () => {
    return (
        <ScrollView style={styles.scrollView}>
        <View>
            <LibraryCard name={"Irving K. Barber Learning Centre"} hours={["6am", "12am"]}
            address={"1961 East Mall"} website={"https://ikblc.ubc.ca/"} img={"https://circle-23jan2015.sites.olt.ubc.ca/files/2017/05/guilhem-vellut-ikblc-sunrise-768x381.jpg"}> </LibraryCard>

            <LibraryCard name={"Koerner Library"} hours={["7:30am", "10pm"]} address={"1958 Main Mall"}
            website={"https://koerner.library.ubc.ca/"} img={"https://research-commons-2019.sites.olt.ubc.ca/files/2019/10/library4.jpg"}> </LibraryCard>


             <LibraryCard name={"Woodward Library"} hours={["8am", "10pm"]} address={"2198 Health Sciences Mall"}
            website={"https://woodward.library.ubc.ca/"} img={"https://about.library.ubc.ca/files/2019/02/2006_Woodward_P2060048_920x512.jpg"}> </LibraryCard>
        </View>
        </ScrollView>
        // <View>
        //     <LibraryComponent name={"Irving K. Barber Learning Centre"} hours={["6am", "12am"]}
        //         address={"1961 East Mall"} website={"https://ikblc.ubc.ca/"}> </LibraryComponent>

        //     <LibraryComponent name={"Koerner Library"} hours={["7:30am", "10pm"]} address={"1958 Main Mall"}
        //         website={"https://koerner.library.ubc.ca/"}> </LibraryComponent>

        //     <LibraryComponent name={"Woodward Library"} hours={["8am", "10pm"]} address={"2198 Health Sciences Mall"}
        //         website={"https://woodward.library.ubc.ca/"}> </LibraryComponent>
        // </View>
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
        color: "black"
    },
    cardContainer: {
        margin: 15,
        backgroundColor: "white",
        padding: 15,
        shadowColor: "black",
        shadowRadius: 5
    },
    cardTitle: {
        fontWeight: "bold"
    },
    websiteStyle: {
        marginTop: 10,
        marginBottom: 15,
        color: "blue"
    },
    scrollView: {
        flex: 1,
    }
});

export default Library;