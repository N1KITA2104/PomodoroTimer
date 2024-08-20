import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PomodoroScreen from './screens/PomodoroScreen';
import ShortBreakScreen from './screens/ShortBreakScreen';
import LongBreakScreen from './screens/LongBreakScreen';

const Tab = createBottomTabNavigator();

type IconName = 'timer-sand' | 'timer-sand-empty' | 'timer-sand-full';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IconName;

            if (route.name === 'Pomodoro') {
              iconName = 'timer-sand';
            } else if (route.name === 'Short Break') {
              iconName = 'timer-sand-empty';
            } else if (route.name === 'Long Break') {
              iconName = 'timer-sand-full';
            } else {
              iconName = 'timer-sand';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
        <Tab.Screen name="Short Break" component={ShortBreakScreen} />
        <Tab.Screen name="Long Break" component={LongBreakScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
