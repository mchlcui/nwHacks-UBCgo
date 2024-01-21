import React from 'react';
import { Button, Text, View, SectionList, Alert, StyleSheet, Linking } from 'react-native';

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
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
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
    padding: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
  },

  
});

export default Contacts;