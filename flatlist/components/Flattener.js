import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import FlatItem from './FlatItem';
import FlatData from '../data/FlatData';

const Flattener = () => {
    return (
        <SafeAreaView>
            <FlatList data={FlatData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={32}
                bouncesZoom={true}
                zoomScale={2}
                maximumZoomScale={10}
                minimumZoomScale={2}
                bounces={false}
                renderItem={
                    ({item}) => <FlatItem item = {item}/>
                }
            />
        </SafeAreaView>
    )
}

export default Flattener;

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }
  });
