import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import {styles} from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';


import CustomButton from '../Components/CustomButton';

export default function HomePageScreen({ navigation }) {

    
  return (
    <SafeAreaView style={styles.container}>
        <Image
                            source='https://reactnative.dev/img/tiny_logo.png'
                        />
      <Text style={styles.title}>UserName</Text>
        <Ionicons name="checkmark-circle" size={32} color="green" />

      
      <View>
          <CustomButton onPress={() => navigation.navigate('ReelsPage')}>
            <Text style={styles.buttonLabel}>Watch More</Text>
          </CustomButton>
        
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


