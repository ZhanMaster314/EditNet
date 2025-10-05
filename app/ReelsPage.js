import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import {styles} from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker'


import CustomButton from '../Components/CustomButton';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ReelsPageScreen({ navigation }) {
    const [allMedia,setAllMedia]=useState([])
    const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
        setAllMedia(prevArray => [...prevArray, result.assets[0].uri]);
    } else {
      alert('You did not select any image.');
    }
  
    }
    
  return (
    <SafeAreaView style={styles.container}>
        <CustomButton onPress={pickImageAsync}>
            <Text style={styles.buttonLabel}>Upload</Text>
        </CustomButton>
      <FlatList
        data={allMedia}
        renderItem={({item,index}) => {
            return(
                <View style={[{
                    backgroundColor:"black",

                }]}>
                <Image 
                source={{ uri: item }}
                style={styles.reelsImage}
                />
                
                </View>
            )
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


