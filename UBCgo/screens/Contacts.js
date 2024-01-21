import React from 'react';
import { Alert, Button, Linking, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Contacts = () => {
  const data = [
    {
      title: 'UBC Contact Info',
      data: [
        { key: '1', label: 'General Inquiries', value: 'Tel 604 822 2211 (UBC Directory Assistance)' },
        { key: '2', label: 'Admissions Inquiries', value: 'Tel: 604.822.9836' },
        { key: '3', label: 'UBC-V Undergraduate Office', value: 'Welcome Centre, Brock Hall 1200 – 1874 East Mall'},
        { key: '4', label: 'UBC-O Undergraduate Office', value: 'Welcome Centre, University Centre 3272 University Way'},
      ],
    },
  ];

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/universityofbc/?hl=en').catch(() => Alert.alert('Unable to open Instagram'));
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      {/* <Button
        title="Check Out Our Instagram!"
        onPress={handleInstagramPress}
      /> */}

      <View style={styles.socialMedia}>
        <TouchableOpacity onPress={() =>  Linking.openURL('https://www.instagram.com/universityofbc/?hl=en').catch(() => Alert.alert('Unable to open Instagram'))}>
            <Image style={styles.logo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png'}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>  Linking.openURL('https://twitter.com/UBC').catch(() => Alert.alert('Unable to open X'))}>
            <Image style={styles.logo} source={{uri: 'https://cdn.vox-cdn.com/thumbor/R7DLY7LmcYoLxpp8xmH3CybIpVA=/0x0:1600x1600/2000x1333/filters:focal(800x800:801x801)/cdn.vox-cdn.com/uploads/chorus_asset/file/24805464/F1x5VdQX0AA9Sgt.jpeg'}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>  Linking.openURL('https://www.facebook.com/universityofbc/').catch(() => Alert.alert('Unable to open Facebook'))}>
            <Image style={styles.logo} source={{uri: 'https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png'}} />
        </TouchableOpacity>
      </View>

      {/* <Button
        title="Call us"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemContainer: {
    marginBottom: 12,
  },
  label: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    color: "black",
    fontSize: 18,
    marginBottom: 15,
  },
  socialMedia: {
    flexDirection: "row", // allows multiple buttons on a line
    flexWrap: "wrap", // overflowing button goes to next line
    justifyContent: "space-between", 
    marginBottom: 30
  },
  logo: {
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 10,
    height: 90,
    width: 90,
}
});

export default Contacts;