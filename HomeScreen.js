import React from 'react';
import {View, Button,Text} from 'react-native';
import { FriendsContext } from './FriendsContext';

class HomeScreen extends React.Component {
  render() {
    console.log(this.score)
    return (
      <View>
        
        <Button
          title="Upload from file"
          onPress={() =>
            this.props.navigation.navigate('file')
          }
        />
        <Button
          title="See previous snapshot"
          onPress={() =>
            this.props.navigation.navigate('history')
          }
        />
        <Text>{this.score}</Text>

        <Button
          title="Take a picture"
          onPress={() =>
            this.props.navigation.navigate('Camera')
          }
        />
        

      </View>

      
    );
  }
}
HomeScreen.contextType = FriendsContext;
// ...

export default HomeScreen;