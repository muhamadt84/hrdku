import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Berita from '../screens/Berita';
import DetailBerita from '../screens/DetailBerita';
import Jadwal from '../screens/Jadwal';
import BuatJadwal from '../screens/BuatJadwal';
import Camera from '../screens/Camera';
import Daftar from '../screens/Daftar';
import LupaSandi from '../screens/LupaSandi';
import Notifikasi from '../screens/Notifikasi';
import ICBack from '../assets/Back.svg';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Berita"
          component={Berita}
          options={{
            headerShown: true, title: "Info & Berita",
            headerBackImage: () => (<ICBack />),
          }}
        />
        <Stack.Screen
          name="DetailBerita"
          component={DetailBerita}
          options={{
            headerShown: true, title: "Detail Info",
            headerBackImage: () => (<ICBack />),
          }}
        />
        <Stack.Screen
          name="Jadwal"
          component={Jadwal}
          options={{
            headerShown: true, title: "Rencana Izin",
            headerBackImage: () => (<ICBack />),
          }}
        />
        <Stack.Screen
          name="BuatJadwal"
          component={BuatJadwal}
        /*  options={{
           headerShown: true, title: "Membuat Jadwal",
           headerBackImage: () => (<ICBack />),
         }} */
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Daftar"
          component={Daftar}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LupaSandi"
          component={LupaSandi}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifikasi"
          component={Notifikasi}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavStack;
