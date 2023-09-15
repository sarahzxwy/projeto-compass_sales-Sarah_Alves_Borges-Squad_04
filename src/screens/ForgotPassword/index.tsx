import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


 type LoginProps = {
  navigation: any;
 }

 function Login({ navigation } : LoginProps ) {
  const [email, setEmail] = useState<string>('');

   const handleLogin = () => {
   navigation.navigate('Login');
   }; 
  
   return (

    <View>
        <View>
        <Text>Login</Text>
        </View>

        <View>
        <View>
        <TextInput 
        placeholder="Email"
        value={email}
        onChange={(text) => setEmail(text.nativeEvent.text)}
        secureTextEntry={true}/>
        </View>

        </View>

        <View>
        <TouchableOpacity
        onPress={handleLogin}>
        <Text>Send</Text>
        </TouchableOpacity>
        </View>
    </View>
    )

  }

  export default Login;

  