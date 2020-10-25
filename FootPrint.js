import React from 'react';
import {Text, View,Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { FriendsContext } from './FriendsContext';
import {firebase} from './axios/axios'

class Footprint extends React.Component{
  constructor(props) {
        super(props)
        this.state = {
          swap:false,
          amount:0,
          selectedValue: 'PET bottle',
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
          rangeValues:[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
          
        }

        
        

      }

    pickerItem = (item) => {
      this.setState({selectedValue:item})

    
    }
    pickerAmount = (amounts) => {
      console.log(amounts)
      this.setState({amount: amounts})
    }
    submit = () => {
      firebase.database().ref('/2020/10').push({
        object: this.state.selectedValue,
        amount:  this.state.amount ,
        footPrintScore: this.state.amount * 80
      }).then(() => console.log('done'));
      

    }

  
  render() {
    const range = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
    const formElementArray = [];
    const amount = [];
    for(let key in this.state.form){
      formElementArray.push({
        id:key,
        values: this.state.form[key]
      })

    }
    
    
    return(
      <View>
        
        <Text h1>Item</Text>
        <Picker
          style={{width:"100%" }}
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue, itemIndex) => this.pickerItem(itemValue)}

        >
        {formElementArray.map(element => (
           <Picker.Item label={element.values.type} value={element.values.type} key={element.values.type} />
        ))}
  
      </Picker>

      <View style={{flex: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'powderblue'}}>
        <Text h1>Amount</Text>
        <Button title="Swap"
        
        />
      </View>
      
      <Picker
          style={{width:"100%" }}
          selectedValue={this.state.amount}
          onValueChange={(itemAmount, itemAmountIndex) => this.pickerAmount(itemAmount)}
          >
        <Picker.Item label="0" value="0"/>
        <Picker.Item label="10" value="10"/>
        <Picker.Item label="20" value="20"/>
        <Picker.Item label="30" value="30"/>
        <Picker.Item label="40" value="40"/>
        <Picker.Item label="50" value="50"/>
        <Picker.Item label="60" value="60"/>
        <Picker.Item label="70" value="70"/>
        <Picker.Item label="80" value="80"/>
        <Picker.Item label="90" value="90"/>
        <Picker.Item label="100" value="100"/>
        
      </Picker>

      <Picker
          style={{width:"100%" }}
          selectedValue={this.state.amount}
          onValueChange={(itemAmount, itemAmountIndex) => this.pickerAmount(itemAmount)}
          >
        <Picker.Item label="1" value="1"/>
        <Picker.Item label="2" value="2"/>
        <Picker.Item label="3" value="3"/>
        <Picker.Item label="4" value="4"/>
        <Picker.Item label="5" value="5"/>
        <Picker.Item label="6" value="6"/>
        <Picker.Item label="7" value="7"/>
        <Picker.Item label="8" value="8"/>
        <Picker.Item label="9" value="9"/>
        <Picker.Item label="10" value="10"/>
        <Picker.Item label="11" value="11   "/>
        
      </Picker>
  
      <Button title="Calculate foot print!" onPress={this.submit}/>

      </View>
    )
  }
}

Footprint.contextType = FriendsContext;

export default Footprint;