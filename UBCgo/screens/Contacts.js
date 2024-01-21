import React from 'react';
import { Alert, Button, Linking, SectionList, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Divider } from 'react-native-paper';

const Contacts = () => {
  const data = [
    {
      title: 'UBC Contact Info',
      data: [
        { key: '1', label: 'General Inquiries', value: 'Tel 604 822 2211 (UBC Directory Assistance)' },
        { key: '2', label: 'Admissions Inquiries', value: 'Tel: 604.822.9836' },
        { key: '3', label: 'UBC-V Undergraduate Office', value: 'Welcome Centre, Brock Hall 1200 – 1874 East Mall' },
        { key: '4', label: 'UBC-O Undergraduate Office', value: 'Welcome Centre, University Centre 3272 University Way' },
      ],
    },
  ];

  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/universityofbc/?hl=en';
    Linking.openURL(instagramURL).catch(() => Alert.alert('Unable to open Instagram'));
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Card style={styles.card}>
              <Text style={styles.label}>{item.label}</Text>
              <Divider horizontalInset={true} bold={true} />
              <Text style={styles.value}>{item.value}</Text>
            </Card>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      <Button
        title="Check Out Our Instagram!"
        onPress={handleInstagramPress}
      />
      <Button
        title="Call us"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white'
  },
  sectionHeader: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 12,
    backgroundColor: 'white'
  },
  label: {
    color: "black",
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  value: {
    color: "black",
    fontSize: 16,
    textAlign: 'center',
    margin: 4,
    backgroundColor: 'white'
  },

  card: {
    backgroundColor: 'white',
    margin: 4
  }
});

export default Contacts;