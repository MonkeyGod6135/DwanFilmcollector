import React from 'react';
import ActorsScreen from '../screens/Actors';
import FilmScreen from '../screens/Films';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },  
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
      <Tab.Screen name={'Actors'} component={ActorsScreen}/>
      <Tab.Screen name={'Films'} component={FilmScreen}/>
    </Tab.Navigator>
  );  
};

export default TabNavigator;