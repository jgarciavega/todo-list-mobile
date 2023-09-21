import { Link, router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from "formik";
import React from "react";
import { Alert, Button, Pressable, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  email: Yup.string()
  .email()
  .matches(/^(?!.*@[^,]*,)/)
  .required('Obligatorio'),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const Login = props => {
  return(
    <SafeAreaView className="bg-slate-600 w-screen h-screen align-middle justify-center">
      <View>
          <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={signUpSchema}
              onSubmit={ values => {
              Alert.alert('Submit', JSON.stringify(values), [
                  {
                  text: 'Cancelar',
                  onPress: () => console.log('Closed')
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
              ])
              } }
          >
              {({ handleChange, handleBlur, handleSubmit, setFieldTouched, isValid, values, errors }) => (
              <View
                  className="bg-white shadow-md rounded px-8 pt6 mb-4 py-7"
              >
                  <Text className="block text-gray-700 text-sm font-bold mb-2">Email: </Text>
                  <TextInput
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  />
                  {errors.email && (
                  <Text className="text-red-700">{errors.email}</Text>
                  )}
                  <Text className="block text-gray-700 text-sm font-bold mb-2">Password: </Text>
                  <TextInput
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  />
                  {errors.password && (
                  <Text className="text-red-700">{errors.password}</Text>
                  )}
                  <Pressable 
                  className="bg-slate-700 p-6 rounded active:bg-slate-900"
                  onPress={handleSubmit}
                  >
                  <Text
                      className="text-white text-center"
                  >Submit</Text>
                  </Pressable>
              </View>
              )}
          </Formik>
          <Pressable
            onPress={() => {router.replace('/SignUp')}}
            className="bg-slate-700 px-3 py-3 block mx-6 rounded active:bg-slate-900">
              <Text className="text-white text-center">
                  aun no estas subscrito? Suscribete Ahora!
              </Text>
          </Pressable>
      </View>
      <StatusBar />
    </SafeAreaView>
  )
}

export default Login;