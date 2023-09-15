 import React, { useState } from "react";
 import { View, Text, TextInput, TouchableOpacity } from 'react-native';


 type SignUpProps = {
  navigation: any;
 }

 function SignUp({ navigation } : SignUpProps ) {
  const [username, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

   const handleSignUp = () => {
   navigation.navigate('HomePage');
   }; 
  
   return (

    <View>
        <View>
        <Text>Sign Up</Text>
        </View>

        <View>

        <View>
        <Text>Name</Text>
        <TextInput 
        placeholder="Name"
        value={username}
        onChangeText={(text) => setName(text)} />
        </View>
        <View>
        <Text>Email</Text>
        <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)} />
        </View>
        <View>
        <TextInput 
        placeholder="Password"
        value={password}
        onChange={(text) => setPassword(text.nativeEvent.text)}
        secureTextEntry={true}/>
        </View>

        </View>

        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Already have an account?</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
        onPress={handleSignUp}>
        <Text>SIGN UP</Text>
        </TouchableOpacity>
        </View>
    </View>
    )

  }

  export default SignUp;

  