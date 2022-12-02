import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Avatar from 'react-native-awesome-library';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <Avatar size="abc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
