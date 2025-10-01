import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {styles} from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../Components/CustomButton';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to EditNet!</Text>
      <View>
          <CustomButton onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.buttonLabel}>Login</Text>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonLabel}>Sign Up</Text>
            </CustomButton>

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


