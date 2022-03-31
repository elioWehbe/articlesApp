import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/LoginScreen';
import Dashboard from '../screens/DashboardScreen';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


// function MyDrawer() {
//     return (
//       <Drawer.Navigator>
//           <Drawer.Screen name="dash" component={Dashboard} />
//       </Drawer.Navigator>
//     );
//   }
const Navigator=()=>{
    // const isAuth = useSelector(state => !!state.auth.access_token);
    // const isAuth=getState().auth.token!==0;
    return (
        <NavigationContainer>
 
      <Stack.Navigator>
    
        <Stack.Screen name="login" component={Login} />
       <Stack.Screen name="dash" component={Dashboard} />
      </Stack.Navigator>
        </NavigationContainer>
      );
};
export default Navigator;