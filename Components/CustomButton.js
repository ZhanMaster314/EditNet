import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {styles} from '../styles';



export default function CustomButton({style, ...props}) {
  return (
          <TouchableOpacity style={[styles.button, style]} {...props}/>
            
  );
}


