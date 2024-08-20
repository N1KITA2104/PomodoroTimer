import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Vibration } from 'react-native';

interface TimerProps {
  initialMinutes: number;
  onTimerEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialMinutes, onTimerEnd }) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timer as NodeJS.Timeout);
            Vibration.vibrate(1000);
            onTimerEnd();
            setSeconds(initialMinutes * 60); 
            return initialMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, initialMinutes, onTimerEnd]);

  const handleStartPause = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setSeconds(initialMinutes * 60);
    setIsRunning(false);
  }, [initialMinutes]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={handleStartPause}>
          <Text style={styles.buttonText}>{isRunning ? "Pause" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  timer: {
    fontSize: 72,
    marginBottom: 20,
    color: '#000000', 
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
  leftButton: {
    marginRight: 2.5,
  },
  rightButton: {
    marginLeft: 2.5,
  },
});

export default Timer;
