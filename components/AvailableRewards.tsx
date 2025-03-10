import ViewCustom from './ui/ViewCustom';
import TextCustom from './ui/TextCustom';
import { StyleSheet, FlatList } from 'react-native';

type RewardCardProps = {
  title: string;
  description: string;
  points: number;
  backgroundColor?: string;
};

const REWARDS_DATA: RewardCardProps[] = [
  {
    title: 'Amazon',
    description: '15% off next purchase',
    points: 1200,
    backgroundColor: '#FFF8E1',
  },
  {
    title: 'Coffee Shop',
    description: 'Free medium coffee',
    points: 800,
    backgroundColor: '#E8F5E9',
  },
  {
    title: 'Nike',
    description: '20% off on shoes',
    points: 1500,
    backgroundColor: '#E3F2FD',
  },
  {
    title: 'Spotify',
    description: '1 month premium',
    points: 2000,
    backgroundColor: '#F3E5F5',
  },
  {
    title: 'Uber',
    description: '$10 ride discount',
    points: 1000,
    backgroundColor: '#FAFAFA',
  },
  {
    title: 'Netflix',
    description: '1 month subscription',
    points: 2500,
    backgroundColor: '#FFEBEE',
  },
];

function RewardCard({
  title,
  description,
  points,
  backgroundColor = '#FFFFFF',
}: RewardCardProps) {
  return (
    <ViewCustom style={styles.rewardCard}>
      <ViewCustom style={[styles.rewardHeader, { backgroundColor }]}>
        <TextCustom style={styles.rewardTitle}>{title}</TextCustom>
      </ViewCustom>
      <TextCustom style={styles.rewardDescription}>{description}</TextCustom>
      <ViewCustom style={styles.rewardFooterContainer}>
        <TextCustom style={styles.pointsText}>{points} pts</TextCustom>
        <ViewCustom style={styles.redeemButton}>
          <TextCustom style={styles.redeemButtonText}>Redeem</TextCustom>
        </ViewCustom>
      </ViewCustom>
    </ViewCustom>
  );
}

export default function AvailableRewards() {
  const renderItem = ({ item }: { item: RewardCardProps }) => (
    <RewardCard
      title={item.title}
      description={item.description}
      points={item.points}
      backgroundColor={item.backgroundColor}
    />
  );

  return (
    <ViewCustom style={styles.container}>
      <ViewCustom style={styles.header}>
        <TextCustom style={styles.headerTitle}>Available Rewards</TextCustom>
        <TextCustom style={styles.viewAllText}>View All</TextCustom>
      </ViewCustom>

      <FlatList
        key="horizontal"
        data={REWARDS_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <ViewCustom style={styles.separator} />}
      />
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#4285F4',
  },
  listContent: {
    paddingRight: 16,
  },
  separator: {
    width: 12,
  },
  rewardCard: {
    borderRadius: 8,
    width: 200,
    gap: 16,
    borderWidth: 1,
    borderColor: '#a9a9a9a6',
  },
  rewardHeader: {
    padding: 16,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  rewardDescription: {
    fontSize: 14,
    marginTop: 4,
    color: '#666',
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  rewardFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  pointsText: {
    fontSize: 14,
    color: '#666',
  },
  redeemButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  redeemButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
