import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to EditNet!</Text>
      <View>
          <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.buttonLabel}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.buttonLabel}>Sign Up</Text>
            </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


