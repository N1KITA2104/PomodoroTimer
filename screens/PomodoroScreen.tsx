import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from '../components/Timer';

interface PomodoroScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const PomodoroScreen: React.FC<PomodoroScreenProps> = ({ navigation }) => {
  const handleTimerEnd = () => {
    navigation.navigate('ShortBreak');
  };

  return (
    <View style={styles.container}>
      <Timer initialMinutes={25} onTimerEnd={handleTimerEnd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F6F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PomodoroScreen;
