import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

let POIs = [
    {
        title: "Great Dane Coffee",
        location: {
            latitude: 49.270191980712085,
            longitude: -123.25073608756244
        },
        description: ""
    },

    {
        title: "Starbucks - UBC Life Building",
        location: {
            latitude: 49.267545498500326,
            longitude: -123.25008897406985
        },
        description: ""
    },

    {
        title: "Tim Hortons - David Lam Research Centre",
        location: {
            latitude: 49.26580136098747,
            longitude: -123.25434807025336
        },
        description: ""
    },

    {
        title: "Blue Chip Café",
        location: {
            latitude: 49.266725987066124,
            longitude: -123.24949859365371
        },
        description: ""
    },

    {
        title: "Loafe Café",
        location: {
            latitude: 49.266011792152554,
            longitude: -123.2499944540305
        },
        description: ""
    },

    {
        title: "Starbucks - UBC Book Store",
        location: {
            latitude: 49.26535416047714,
            longitude: -123.25068745327752
        },
        description: ""
    },

    {
        title: "JJ Bean Coffee Roasters",
        location: {
            latitude: 49.26643238669642,
            longitude: -123.2469216317416
        },
        description: ""
    },

    {
        title: "The Boulevard Coffe Roasting Co",
        location: {
            latitude: 49.26614289162798,
            longitude: -123.24638937407003
        },
        description: ""
    },

    {
        title: "Starbucks - Fred Keiser Building",
        location: {
            latitude: 49.262480923278154,
            longitude: -123.24990354243563
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

    {
        title: "Koerner's Pub",
        location: {
            latitude: 49.26856328155255,
            longitude: -123.25813908957626
        },
        description: ""
    },

    {
        title: "The Point",
        location: {
            latitude: 49.262233028531654,
            longitude:  -123.25552833908395
        },
        description: ""
    },

    {
        title: "Gallery Patio & Lounge",
        location: {
            latitude: 49.26698549623312,
            longitude:  -123.25021370119931
        },
        description: ""
    },

    {
        title: "AMS Student Nest (Food Court)",
        location: {
            latitude: 49.26675199110414,
            longitude: -123.24958582078061
        },
        description: ""
    },

    {
        title: "Orchard Commons (Food Court)",
        location: {
            latitude: 49.260137118748396, 
            longitude: -123.25053955257721
        },
        description: ""
    }
]

const Dining = () => {
    const onRegionChange = (region) => {
    }

    const showPOIs = () => {
        return POIs.map((location, index) => {
            return (
                <Marker
                    key={index}
                    coordinate={location.location}
                    title={location.title}
                />
            )
        })
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
                {showPOIs()}

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