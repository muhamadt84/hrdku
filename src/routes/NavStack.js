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
import EditProfile from '../screens/EditProfile';
import DetailProfile from '../screens/DetailProfile';
import DaftarTugas from '../screens/DaftarTugas';
import LaporanKerja from '../screens/LaporanKerja';
import AbsenHarian from '../screens/AbsenHarian';
import Lokasi from '../screens/Lokasi';

const Stack = createNativeStackNavigator();

function NavStack() {
  // const { userInfo, splashLoading } = useContext(AuthContext)
  //console.log("coba " + userInfo.Data);

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
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Berita"
          component={Berita}
        />
        <Stack.Screen
          name="DetailBerita"
          component={DetailBerita}
        />
        <Stack.Screen
          name="Jadwal"
          component={Jadwal}
        />
        <Stack.Screen
          name="BuatJadwal"
          component={BuatJadwal}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
        />
        <Stack.Screen
          name="LupaSandi"
          component={LupaSandi}
        />
        <Stack.Screen
          name="Notifikasi"
          component={Notifikasi}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          name="DetailProfile"
          component={DetailProfile}
        />
        <Stack.Screen
          name="DaftarTugas"
          component={DaftarTugas}
        />
        <Stack.Screen
          name="LaporanKerja"
          component={LaporanKerja}
        />
        <Stack.Screen
          name="AbsenHarian"
          component={AbsenHarian}
        />
        <Stack.Screen
          name="Lokasi"
          component={Lokasi}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Daftar"
          component={Daftar}
        />
        {/* {
          splashLoading ? (
            <Stack.Screen
              name="Splash"
              component={Splash}
            />
          ) : (
            userInfo.Data ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={Home}
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
                />
                <Stack.Screen
                  name="Camera"
                  component={Camera}
                />
                <Stack.Screen
                  name="LupaSandi"
                  component={LupaSandi}
                />
                <Stack.Screen
                  name="Notifikasi"
                  component={Notifikasi}
                />
                <Stack.Screen
                  name="Profile"
                  component={Profile}
                />
                <Stack.Screen
                  name="EditProfile"
                  component={EditProfile}
                />
                <Stack.Screen
                  name="DetailProfile"
                  component={DetailProfile}
                />
                <Stack.Screen
                  name="DaftarTugas"
                  component={DaftarTugas}
                />
                <Stack.Screen
                  name="LaporanKerja"
                  component={LaporanKerja}
                />
                <Stack.Screen
                  name="AbsenHarian"
                  component={AbsenHarian}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                />
                <Stack.Screen
                  name="Daftar"
                  component={Daftar}
                />
              </>
            )

          )
        } */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavStack;
