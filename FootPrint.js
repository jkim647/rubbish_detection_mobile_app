import React from 'react';
import {Text, View,Button } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { FriendsContext } from './FriendsContext';
import {firebase} from './axios/axios'

class Footprint extends React.Component{
  constructor(props) {
        super(props)
        this.state = {
          form:{
            plastic_bottle: {
              type: 'PET bottle',
              carbon_dioxide: 82.8,
              amount:0

            },
            plastic_bag: {
              type: 'Juice&Shampoo container',
              carbon_dioxide: 100,
              amount: 0
            },
            Can: {
              type: 'Can',
              carbon_dioxide: 100,
              amount: 0
            }

          },
          amount:0
        }
        

      }


  
  render() {
    const formElementArray = [];
    const amount = [];
    for(let key in this.state.form){
      formElementArray.push({
        id:key,
        values: this.state.form[key]
      })

    }
    for(let i = 10; i < 101; i+10){
      amount.push(i)
    }
    console.log(amount)
    
    return(
      <View>
        <Picker
          style={{width:"100%" }}
        >
        {formElementArray.map(element => (
           <Picker.Item label={element.values.type} value={element.values.type} />
        ))}

      </Picker>
      </View>
    )
  }
}

Footprint.contextType = FriendsContext;

export default Footprint;