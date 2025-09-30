import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './styles';


export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <Text>LogIn</Text>
      <StatusBar style="auto" />
    </View>
  );
}