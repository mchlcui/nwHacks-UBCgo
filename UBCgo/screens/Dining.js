import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

let POIs = [
    {
        title: "Great Dane Coffee",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Starbucks - UBC Life Building",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Tim Hortons - David Lam Research Centre",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Blue Chip Café",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Loafe Café",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Starbucks - UBC Book Store",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "JJ Bean Coffee Roasters",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "The Boulevard Coffe Roasting Co",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Starbucks - Fred Keiser Building",
        location: {
            latitude: 0,
            longitude: 0
        },
        description: ""
    },

    {
        title: "Tim Hortons - Forest Sciences Centre",
        location: {
            latitude: 49.26036691671225,
            longitude: -123.24845340475653
        },
        description: ""
    },

    {
        title: "Bean Around The World Coffee House and Bistro",
        location: {
            latitude: 49.25910234203463,
            longitude: -123.24814196919544
        },
        description: ""
    },
]

const Dining = () => {
    const onRegionChange = (region) => {
    }

    return (
        <View>
            <MapView
                style={styles.map}
                onRegionChange={onRegionChange}
                initialRegion={{
                    latitude: 49.2606,
                    longitude: -123.2460,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}>

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})

export default Dining;