import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './Login';

const App = () => {
  // const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    // <View className="flex items-center justify-center h-screen dark:bg-black">
    //   <Text className="font-bold text-3xl dark:text-white">Ejemplo!</Text>
    //   <Pressable
    //     onPress={toggleColorScheme}
    //     className="bg-slate-700 p-6 rounded active:bg-slate-900"
    //   >
    //       <Text className="text-white">This is a Button</Text>
    //   </Pressable>
    //   <StatusBar style={colorScheme === 'dark'?'light':'dark'}/>
    //   <Link className="dark:text-white" href="/product">Product</Link>
    // </View>
    // <Text className="text-6xl">Hola</Text>
    
      <Login></Login>
  );
}

export default App;