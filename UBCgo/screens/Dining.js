import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

let POIs = [
    {

    }
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