import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FootPrintUpdate from './FootPrint';
import { FriendsContext } from './FriendsContext';
import HistoryScreen from './HistoryScreen';
import OpenCamera from './openCamera'





const Stack = createStackNavigator(); 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }


  render() {
    return(
    <FriendsContext.Provider
      value={
        {
          score: this.state.score
        }
      }
    >
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            
          />
        <Stack.Screen
          name="Camera"
          component={OpenCamera}
        />
        <Stack.Screen
          name="history"
          component={HistoryScreen}
        />
        <Stack.Screen
          name="FootPrint"
          component={FootPrintUpdate}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </FriendsContext.Provider>
    );
  }
}



export default App;