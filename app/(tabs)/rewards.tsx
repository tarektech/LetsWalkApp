import { StyleSheet, View, Text } from 'react-native';

export default function RewardsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
