import React from 'react';
import {View, Button,Text} from 'react-native';
import { FriendsContext } from './FriendsContext';
import {firebase} from './axios/axios'

class HomeScreen extends React.Component {
  
  componentDidMount(){
    console.log('fetched')
    const ref = firebase.database().ref("2020/10")
    ref.then((result) => {
      console.log(result) 
    })
    console.log(ref)
    

  }

  render() {
    console.log(this.context.score)
    return (
      
        
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 20, marginTop:20}}>Your Foot Print Score this month! </Text>
          <Text style={{fontSize: 20}}>{this.context.score}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-end'}}>
          <View style={{ height: 100, backgroundColor: 'powderblue', flexDirection: 'column', justifyContent: 'center'}}>
            <Button
              title="Update my footprint"
              onPress={() =>
              this.props.navigation.navigate('FootPrint')
              }
            />
          </View>
          <View style={{height: 100, backgroundColor: 'yellow', flexDirection: 'column', justifyContent: 'center'}}>
            <Button
              title="See previous snapshot"
              onPress={() =>
              this.props.navigation.navigate('history')
              }
            />
          </View>

          <View style={{height: 100, backgroundColor: 'greenyellow', flexDirection: 'column', justifyContent: 'center'}}>
            <Button
              title="Take a rubbish"
              onPress={() =>
              this.props.navigation.navigate('Camera')
              }
          />
          </View>

        </View>

      </View>
      

      
    );
  }
}
HomeScreen.contextType = FriendsContext;
// ...

export default HomeScreen;