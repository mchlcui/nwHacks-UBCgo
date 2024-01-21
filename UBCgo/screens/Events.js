import { Card } from "react-native-paper";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";

const EventCard = ({ date, title, img, website }) => {
    return (
        <Card style={styles.cardContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(website)}>
                <Card.Title title={title} subtitle={date} titleStyle={styles.cardTitle} />

                <Card.Cover source={{ uri: img }} />
            </TouchableOpacity>
        </Card>
    );
}

const Events = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <EventCard date={"Jan 25"} title={"The Phil Lind Initiative: Jia Tolentino"}
                    img={"https://events.ubc.ca/wp-content/uploads/2024/01/Pop-Politics-Horizontal-Signage-V5_.jpg"}
                    website={"https://events.ubc.ca/event/the-phil-lind-initiative-jia-tolentino/"} />

                <EventCard date={"Jan 26"} title={"Stories of Change: Documentary Screening + Climate Atlas"}
                    img={"https://events.ubc.ca/wp-content/uploads/2023/12/Screen-Shot-2024-01-05-at-2.33.50-PM-768x417.png"}
                    website={"https://events.ubc.ca/event/stories-of-change/"} />

                <EventCard date={"Jan 27"} title={"Imagining Multisensory Art: Learning from Objects; Literacy and Inclusion"}
                    img={"https://events.ubc.ca/wp-content/uploads/2023/12/Jan-27-UBC-Connects_feature-768x576.jpg"}
                    website={"https://events.ubc.ca/event/imagining-multisensory-art/"} />

                <EventCard date={"Jan 30"} title={"Diversity Makes Beautiful Music with DJ O SHOW"}
                    img={"https://events.ubc.ca/wp-content/uploads/2024/01/130-banner.jpg"}
                    website={"https://events.ubc.ca/event/diversity-makes-beautiful-music-with-dj-o-show/"} />


                <EventCard date={"Jan 31"} title={"TomorrowLove by Rosamund Small"}
                    img={"https://events.ubc.ca/wp-content/uploads/2024/01/Jonathan-Wood-TomorrowLove-1536x1529.jpg"}
                    website={"https://events.ubc.ca/event/tomorrowlove-by-rosamund-small/2024-01-31/"} />
            </View>
        </ScrollView>
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
        shadowRadius: 5,
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

export default Events;