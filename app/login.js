import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../Components/CustomTextInput'
import { useState } from 'react';

import CustomButton from '../Components/CustomButton';

export default function LogInScreen({ navigation }) {
  const [email, setEmail]=useState('')
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
      <Text style={styles.title}>Log Into your Account</Text>
      <CustomTextInput 
        placeholder='Email'
        keyboardType="email-adress"
        value={email}
        onChangeText={setEmail}
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

      <CustomButton onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonLabel}>Sign Up</Text>
      </CustomButton>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}