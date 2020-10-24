import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import { FriendsContext } from './FriendsContext';
import HistoryScreen from './HistoryScreen';
import OpenCamera from './openCamera'




const Stack = createStackNavigator(); 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Alice',
        'Bob',
        'Sammy',
      ],
      currentFriends: [],
      score: 0
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update the app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return(
    <FriendsContext.Provider
      value={
        {
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
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
        </Stack.Navigator>
      </NavigationContainer>
    </FriendsContext.Provider>
    );
  }
}



export default App;