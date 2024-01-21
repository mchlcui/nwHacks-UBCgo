import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const puppeteer = require('puppeteer');

async function scrapeLibrary(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);

    const [el] = await page.$x('//*[@id="ikblc"]/section[1]/header/h1/a')
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue(); 

    console.log({srcTxt});
}

scrapeLibrary('https://hours.library.ubc.ca/#all');

const LibraryComponent = ({name, hours, address, website}) => {
    libraryData = {
        tableHead: [name],
        tableData: [
          ["Open from " + hours[0] + " to " + hours[1]],
          [address],
          [<TouchableOpacity>
            <Text style={styles.bodyText}>
                <a href={website}> More Details </a>
            </Text>
           </TouchableOpacity>]
        ]
    }

    // let currentDate = new Date();
    // console.log("TIME: ", currentDate());

    // if I
    // libraryData.tableData[2][0] = "TEST";
    return (
        <View style={styles.container}>
            <Table style={styles.tableStyle}>
                <Row data={libraryData.tableHead} style={styles.head} textStyle={styles.headerText}/>
                <Divider/>
                <Rows data={libraryData.tableData} style={styles.body} textStyle={styles.bodyText}/>
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
        backgroundColor: "#adada5"
     },
     bodyText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "brlack"
     }
  });

export default Library;