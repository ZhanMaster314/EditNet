import { TextInput } from 'react-native-gesture-handler';

export default function CustomTextInput({style, ...props}) {

  return (
          <TextInput style={[
            {
                backgroundColor:'blue',
                color:'white',
                padding:20,
                borderRadius:6,
                width:'80%',
                marginTop:10
            },
            style
          ]}
          {...props}/>
            
  );
}
