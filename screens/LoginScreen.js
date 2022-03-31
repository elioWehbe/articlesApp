import { ScrollView,StyleSheet,View,Button,ActivityIndicator,Alert } from 'react-native';
import React, { useReducer, useCallback, useState,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import * as loginAction from '../store/actions/login';
import Input from '../components/Input';
import Card from '../components/Card';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
  
};


const LoginScreen =props=> {
  const [isLoading,setIsLoading]=useState(false);
  const [error, setError] = useState();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
const handleChange=()=>{
  setValue(1);
}
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: '',
      password: ''
    },
    inputValidities: {
      username: false,
      password: false
    },
    formIsValid: false
  });
  useEffect(() => {
    if (error) {
      Alert.alert('Enter a valid field!', error, [{ text: 'Okay' }]);
    }
  }, [error]);
  const loginhandler = async() => {

  setIsLoading(true);
  try {
  
    await dispatch(
      loginAction.login(
        formState.inputValues.username,
        formState.inputValues.password
      )
    );
  
props.navigation.navigate('dash');
      }
      catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
     
    };
  
  const inputChangeHandler = useCallback(
    
    (inputIdentifier, inputValue, inputValidity) => {
      
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );
    return (
       
          <LinearGradient colors={['#076585', '#fff']} style={styles.gradient}>
            <Card style={styles.authContainer}>
              <ScrollView>
                <Input
                  id="username"
                  label="Username :"
                  keyboardType="default"
                  required
                  username
                  value={value}
                  autoCapitalize="none"
                  onChange={handleChange}
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
                <Input
                  id="password"
                  label="Password :"
                  keyboardType="default"
                  secureTextEntry
                  required
                  value={value}
                  autoCapitalize="none"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
                <View style={styles.buttonContainer}>
                  {isLoading?(<ActivityIndicator size="small" color="#076585"/>):(
                  <Button
                    color='#076585'
                    borderRadius='5'
                    style={styles.button}
                    title='Login'
                    onPress={loginhandler}
                    disabled={!value}
                  />)}
                </View>
              </ScrollView>
            </Card>
          </LinearGradient>
        
      );
    };
    
    const styles = StyleSheet.create({
      button:{
        color:'red'
      },
      screen: {
        flex: 5
      },
      gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
      },
      buttonContainer: {
        marginTop: 10
        
      }
    });
export default LoginScreen;