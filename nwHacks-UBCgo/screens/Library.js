import { Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const LibraryComponent = ({name}) => {
    return (
        <Text>{name}</Text>
    )
}

const Library = () => {
    return (
        <View>
            <LibraryComponent name={"Irving K. Barber Learning Centre"}></LibraryComponent>
        </View>
    )
}

export default Library;