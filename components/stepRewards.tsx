import { StyleSheet } from 'react-native';
import TextCustom from './ui/TextCustom';
import ViewCustom from './ui/ViewCustom';

export default function StepRewards() {
  return (
    <ViewCustom style={styles.container}>
      <ViewCustom style={styles.titleContainer}>
        <TextCustom style={styles.title}>StepRewards</TextCustom>
      </ViewCustom>
      <ViewCustom style={styles.pointsContainer}>
        <TextCustom style={styles.points}>2,450 pts</TextCustom>
      </ViewCustom>
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4a6fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  points: {
    fontSize: 20,
    backgroundColor: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 10,
    color: '#4a6fff',
  },
});
