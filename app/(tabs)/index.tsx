import AvailableRewards from '@/components/AvailableRewards';
import DailyProgress from '@/components/dailyProgress';
import StepRewards from '@/components/stepRewards';
import TextCustom from '@/components/ui/TextCustom';
import ViewCustom from '@/components/ui/ViewCustom';
import { StyleSheet } from 'react-native';


export default function HomeScreen() {

  return (
    <ViewCustom style={styles.container}>
      <StepRewards />
      <DailyProgress />
      <AvailableRewards />
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } 
});
