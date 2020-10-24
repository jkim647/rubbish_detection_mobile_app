import React from 'react';
import { View, Image, StyleSheet, ListView} from 'react-native';
import { FriendsContext } from './FriendsContext';
import {firebase} from './axios/axios'

class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: []
        }
      }

  async componentDidMount(){
      console.log("data is loaded from firebas")
      const ref = firebase.storage().ref("images/2020/9")
      ref.listAll().then((result)=>{
        result.items.forEach((imgRef) =>{
         imgRef.getDownloadURL().then((url)=>{
           console.log("success")
           this.setState({url: [...this.state.url, url]})
         })
        })
      })
  .catch((e) => console.log('getting an error'))}
  

  render() {
    let image= []
    for(let i = 0; i<this.state.url.length; i++){
      console.log(this.state.url[i])
      image.push(<Image source={{uri:this.state.url[i]}}  style={{
        alignSelf: 'center',
        height: 150,
        width: 150,
        margin: 20
        
      }}/>)
    }
    return (
       <View>
         {image}
      </View>

      
    );
  }
}
History.contextType = FriendsContext;
// ...

export default History;
