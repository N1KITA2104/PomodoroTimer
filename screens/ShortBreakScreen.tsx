import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from '../components/Timer';

interface ShortBreakScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const ShortBreakScreen: React.FC<ShortBreakScreenProps> = ({ navigation }) => {
  const handleTimerEnd = () => {
    navigation.navigate('Pomodoro');
  };

  return (
    <View style={styles.container}>
      <Timer initialMinutes={5} onTimerEnd={handleTimerEnd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShortBreakScreen;
