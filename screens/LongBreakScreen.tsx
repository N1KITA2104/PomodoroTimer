import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from '../components/Timer';

interface LongBreakScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const LongBreakScreen: React.FC<LongBreakScreenProps> = ({ navigation }) => {
  const handleTimerEnd = () => {
    navigation.navigate('Pomodoro');
  };

  return (
    <View style={styles.container}>
      <Timer initialMinutes={15} onTimerEnd={handleTimerEnd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20B2AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LongBreakScreen;
