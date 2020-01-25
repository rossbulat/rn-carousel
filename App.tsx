import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './Carousel'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Statistics Carousel:</Text>
      <Carousel
        style='stats'
        itemsPerInterval={3}
        items={[{
          label: 'TODAY',
          value: 1,
        }, {
          label: 'THIS WEEK',
          value: 39,
        }, {
          label: 'THIS MONTH',
          value: 120,
        }, {
          label: 'YESTERDAY',
          value: 3,
        }, {
          label: 'LAST WEEK',
          value: 25,
        }, {
          label: 'LAST MONTH',
          value: 175,
        }]}
      />

      <Text style={{ marginTop: 30, }}>
        Intro Slides Carousel:
      </Text>
      <Carousel
        style='slide'
        items={[{
          title: 'Welcome, swipe to continue.',
        }, {
          title: 'About feature X.',
        }, {
          title: 'About feature Y.',
        }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
