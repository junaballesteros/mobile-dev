
import React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenA from './ScreenA';
// import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

  const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'landmark';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Explore') {
              iconName = 'compass';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            else if (route.name === 'Cart') {
              iconName = 'briefcase';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            else if (route.name === 'Settings') {
              iconName = 'bars';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: '#7286D3',
          inactiveTintColor: '#E5E0FF',
          activeBackgroundColor: '#FFF2F2',
          inactiveBackgroundColor: '#86A3B8',
          showLabel: true,
          labelStyle: { fontSize: 15 },
        }}
  
      >
        <Tab.Screen
          name="Home"
          component={ScreenA}
          options={{
            header: () => null
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ScreenA}
          options={{
            header: () => null
          }}
        />
        <Tab.Screen
          name="Cart"
          component={ScreenA}
          options={{
            header: () => null
          }}
        />
        <Tab.Screen
          name="Settings"
          component={ScreenA}
          options={{
            header: () => null
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;