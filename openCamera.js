import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image,Alert, Button} from 'react-native';
import {Camera} from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';
import {firebase} from './axios/axios'
import { FriendsContext } from './FriendsContext';



//  var uuid = require('react-native-uuid');

export default function Snap(props){
  const camRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHaspermission] = useState(null);
  const [capturedPhoto, setcapturedPhoto] = useState(null);
  const [SaveImage, saveImageButton] = useState(null);
  const [downloadImage, downloadImages] = useState(null);
  const [FootPrintScore, getFootPrint ] = useState(null);
  const [open, setOpen] = useState(false);
  const [goBack, goBackHome] = useState(false);
 
  useEffect(() => { 
    
    (async() => {
      const {status} = await Camera.requestPermissionsAsync();
      setHaspermission(status === 'granted');
    })();
  }, []);

  if(hasPermission === null){
    return <View/>
  }
  if(hasPermission === false){
    return <Text>Acess denied</Text>
  }


  const takePictures = async () =>{
    if(camRef){
      goBackHome(false)
      console.log('camera')
      const data = await camRef.current.takePictureAsync(); 
      setcapturedPhoto(data.uri)
      setOpen(true);
      saveImageButton(true);      

    } 
  }

  const uploadImage = async () => {
    const date = new Date()
    const getYear = date.getFullYear()
    const getMonth = date.getMonth()
    var number = Math.random()
    number.toString(36)
    console.log(number)
    
    
    
    const recycle = 'can'
    const response = await fetch(capturedPhoto);
    const blob = await response.blob();
    var ref = firebase.storage().ref(`images/${getYear}/${getMonth}/${number}+${recycle}`)
    ref.put(blob).then(() => {
      alert("Added on your repository")
      goBackHome(true)
      })
     .catch((error)=> {
       alert("failed");
     })
    }



const getFootPrints = () => {
  const today = new Date();
  const year = today.getFullYear()
  const month = today.getMonth()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  getFootPrint(3)
  let updates= {date: date, footPrint: FootPrintScore};
} 



const backToHome = () => {
  props.navigation.navigate('Home')
}


  return(
    <SafeAreaView style={styles.container}>
      <Camera
        style={{flex:1}}
        type={type} 
        ref={camRef}
      >
        <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back 
              )
            }}
            >
              <Text style={{fontSize: 20, marginBottom: 13, color: '#FFF'}}>Swap</Text>
          </TouchableOpacity>

        </View>

      </Camera>

      <TouchableOpacity style={styles.button} onPress={takePictures}>
          <FontAwesome name = "camera" size={23} color="#FFF"/>
      </TouchableOpacity>

      {capturedPhoto &&
        <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        >
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', margin:20}}>
            <TouchableOpacity style={{margin: 10}} onPress={() => setOpen(false)}>
              <FontAwesome name="window-close" size={50} color="FF0000"/>
            </TouchableOpacity>
            <Button
            title="Save image"
            onPress={() =>
              uploadImage(true)
            }>
              Save image</Button>
            {goBack&&<Button title="Back to home" onPress={backToHome} style={{fontSize: 20, marginBottom: 13, color: '#FFF'}}>Go back to home</Button>}
            <Image
              style={{width: '100%', height: 300, borderRadius: 20}}
              source={{uri: capturedPhoto }}
            />

            

          </View>
          
        </Modal>
      }

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50
  }
}); 
Snap.contextType = FriendsContext;