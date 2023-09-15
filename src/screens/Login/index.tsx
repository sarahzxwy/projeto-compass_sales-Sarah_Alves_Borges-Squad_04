import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


 type LoginProps = {
  navigation: any;
 }

 function Login({ navigation } : LoginProps ) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

   const handleLogin = () => {
   navigation.navigate('HomePage');
   }; 
  
   return (

    <View>
        <View>
        <Text>Login</Text>
        </View>

        <View>
        <Text>Email</Text>
        <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)} />
        </View>
        <View>
        <View>
        <TextInput 
        placeholder="Password"
        value={password}
        onChange={(text) => setPassword(text.nativeEvent.text)}
        secureTextEntry={true}/>
        </View>

        </View>

        <View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text>Forgot your password?</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
        onPress={handleLogin}>
        <Text>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
    )

  }

  export default Login;

  