import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

  function Routes(){
    return(
        <Stack.Navigator>
         <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>

         <Stack.Screen  name="HomePage" component={HomePage}  />
        
        <Stack.Screen  name="Login" component={Login} />
        
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        
      

        
        </Stack.Navigator>
    );

}

export default Routes;