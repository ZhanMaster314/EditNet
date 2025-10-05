import { StyleSheet, Dimensions} from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  buttonContainerbuttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 5,
    padding:15,
    backgroundColor:'#6849a7',
    marginTop:10

  },
  buttonLabel: {
    color: '#f2f2f2',
    fontSize: 16,
  },
  welcomeText:{
    textAlign: 'center',
    color: 'blue',
    fontSize: 50,
  },
  title:{
    textAlign: 'center',
    fontSize:18,
  },
  reelsImage:{
     width: SCREEN_HEIGHT*0.45, 
    height: SCREEN_HEIGHT*0.45,
    backgroundColor:'#F5F5F0',
    marginTop:10

  }
});