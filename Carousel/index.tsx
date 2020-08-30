import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Stat } from './Stat';
import { Slide } from './Slide';
import { styles } from './styles'

export const Carousel = (props: any) => {

  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  const getInterval = (offset: any) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset+1 < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1
        }}
      >
        &bull;
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item: any, index: number) => {
          switch (style) {
            case 'stats':
              return (
                <Stat
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              );
            default:
              return (
                <Slide
                  key={index}
                  title={item.title}
                />
              );
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  )
}

export default Carousel;
