import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Flattener = () => {
    return (
        <SafeAreaView>
            <Text>Flattener</Text>
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
