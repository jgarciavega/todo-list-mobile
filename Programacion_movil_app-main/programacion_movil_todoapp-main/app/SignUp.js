import { Formik } from "formik";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";
import React from "react";
import { Alert, Button, Pressable, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
    name: Yup.string().required('Obligatorio')
    .min(2, 'Necesitas al menos 2 caracteres')
    .max(50, 'Necesitas menos de 50 caracteres'),
  email: Yup.string()
  .email()
  .matches(/^(?!.*@[^,]*,)/)
  .required('Obligatorio'),
  password: Yup.string()
  .required('Obligatorio.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const SignUp = props => {
  return(
    <SafeAreaView className="bg-slate-600 w-screen h-screen align-middle justify-center">
        <View>
            <Formik
                initialValues={{email: '', password: '', confirm_password: ''}}
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
                    <Text className="block text-gray-700 text-sm font-bold">Nombre: </Text>
                    <TextInput
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6"
                    placeholder="Nombre"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    />
                    {errors.name && (
                    <Text className="text-red-700 mb-2">{errors.name}</Text>
                    )}

                    <Text className="block text-gray-700 text-sm font-bold">Email: </Text>
                    <TextInput
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6"
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                    {errors.email && (
                    <Text className="text-red-700 mb-2">{errors.email}</Text>
                    )}

                    <Text className="block text-gray-700 text-sm font-bold">Password: </Text>
                    <TextInput
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6"
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    />
                    {errors.password && (
                    <Text className="text-red-700 mb-2">{errors.password}</Text>
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
                onPress={() => {router.replace('/Login')}}
                className="bg-slate-700 px-3 py-3 block mx-6 rounded active:bg-slate-900 mb-3">
                <Text className="text-blue-500">
                    de vuelta a Login
                </Text>
            </Pressable>
            <Pressable
                onPress={() => {router.replace('/ResetPassword')}}
                className="bg-slate-700 px-3 py-3 block mx-6 rounded active:bg-slate-900 mb-3">
                <Text className="text-blue-500">
                    o al reset password?
                </Text>
            </Pressable>
            <Pressable
                onPress={() => {router.replace('/ForgotPassword')}}
                className="bg-slate-700 px-3 py-3 block mx-6 rounded active:bg-slate-900 mb-3">
                <Text className="text-blue-500">
                    o tal vez olvidaste tu password?
                </Text>
            </Pressable>
        </View>
        <StatusBar />
    </SafeAreaView>
  )
}

export default SignUp;