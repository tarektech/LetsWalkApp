import ViewCustom from './ui/ViewCustom';
import TextCustom from './ui/TextCustom';
import { StyleSheet } from 'react-native';

function ProgressBar() {
  return (
    <ViewCustom style={styles.progressBar}>
      <ViewCustom style={styles.progressFill} />
      <TextCustom style={styles.progressText}>6,532/10,000</TextCustom>
    </ViewCustom>
  );
}

export default function DailyProgress() {
  return (
    <ViewCustom style={styles.container}>
      <ViewCustom>
        <TextCustom style={styles.title}>Today's Progress</TextCustom>
      </ViewCustom>
      <ProgressBar />
      <ViewCustom style={styles.goalContainer}>
        <TextCustom style={styles.goalText}>
          Daily Goal: "10,000" steps
        </TextCustom>
        <TextCustom style={styles.goalText}> +65 pts today</TextCustom>
      </ViewCustom>
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  progressBar: {
    backgroundColor: '#f1f1f1',
    borderRadius: 50,
    height: 40,
    overflow: 'hidden',
    position: 'relative',
  },
  progressFill: {
    backgroundColor: '#34d399',
    width: '80%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dedede',
    textAlign: 'right',
    paddingRight: 16,
    position: 'absolute',
    right: 0,
    height: '100%',
    textAlignVertical: 'center',
    lineHeight: 40,
  },
  title: {
    fontSize: 24,
  },
  goalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalText: {
    fontSize: 16,
  },
});
