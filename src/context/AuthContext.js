import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { token } from '../redux/actions/tokenAction';
import { user } from '../redux/actions/userAction';
import { Alert } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const access_token = useSelector(store => store.tokenReducer.token);

    // const navigation = useNavigation();

    const dispacth = useDispatch();

    const getToken = async () => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/v1/auth/token`, {
            client: "app-android",
            secret: "TWTpknTux7PzuqDh6qLJQPXNvRT3an7B"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-APP-TOKEN': 'TWTpknTux7PzuqDh6qLJQPXNvRT3an7B'
            }
        }).then(response => {
            console.log(response.data.Data.token);
            dispacth(token(response.data.Data.token))
            setIsLoading(false);
        }).catch(error => {
            console.log(error.response);
            setIsLoading(false);
        });
    };

    const register = (company_id, employee_nik, employee_fullname, employee_email, employee_departement, employee_phone_no, employee_password) => {
        setIsLoading(true);
        getToken();
        axios
            .post(`${BASE_URL}/v1/register`, {
                company_id,
                employee_nik,
                employee_fullname,
                employee_email,
                employee_departement,
                employee_phone_no,
                employee_password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ` + access_token
                }
            },)
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
    };

    const login = (email, password) => {

        getToken();
        setIsLoading(true);

        axios.post(`${BASE_URL}/v1/staff/authenticate`,
            {
                'username': email,
                'password': password,
            }, {
            "headers": {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

            dispacth(user(userInfo));
            dispacth(token(userInfo.Data.token));

            setIsLoading(false);

            console.log("selesai login")
            console.log({ userInfo });

        }).catch((error) => {
            console.log("axios error:", error);
            console.warn(error.response.data.message);
            setIsLoading(false);
        });

    };

    const logout = () => {
        setIsLoading(true);
        Alert.alert(
            'Logout',
            'Are you sure want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        AsyncStorage.removeItem('userInfo');
                        setUserInfo({});
                        //navigation.navigate('Login');
                    },
                }
            ],
            { cancelable: false },
        );
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
        console.log(userInfo);
    }, [dispacth]);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                register,
                login,
                logout,
            }} >
            {children}
        </AuthContext.Provider>
    );
};