import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../Components/CustomTextInput'
import { useState } from 'react';

import CustomButton from '../Components/CustomButton';

export default function signUpScreen({ navigation }) {
  const [email, setEmail]=useState('')
  const [nickName, setNickName]=useState('')
  const [password, setPassword]=useState('')

  const HandleSubmit=()=>{
    if(email && password){
      navigation.navigate('HomePage')
    }else{
      alert('Enter your info')
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register Account</Text>
      <CustomTextInput 
        placeholder='Email'
        keyboardType="email-adress"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput 
        placeholder='Nickname'
        value={nickName}
        onChangeText={setNickName}
      />
      <CustomTextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton onPress={HandleSubmit}>
        <Text style={styles.buttonLabel}>Submit</Text>
      </CustomButton>

      <CustomButton onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.buttonLabel}>Log In</Text>
      </CustomButton>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}