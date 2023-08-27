import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import LogStack from './log-stack';
import AppStack from './app-stack';

import {COLORS} from '../globals';
import {closeToast, logOut, login} from '../store/reducer';
import {MyLoader} from '../atom-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import format from 'pretty-format';

function RootNavigation() {
  const {toast, isLogged} = useSelector(state => state.storeReducer);
  // const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);

  // const validateToken = async () => {
  //   const access_token = await AsyncStorage.getItem('access_token');
  //   if (access_token) {
  //     setIsLoading(true);
  //     try {
  //       let {data} = await ApiManager('get', 'auth/me', access_token);
  //       data.response.token = access_token;
  //       dispatch(login(data));
  //     } catch (error) {
  //       if (error?.response?.status === 401) {
  //         dispatch(logOut());
  //         SplashScreen.hide();
  //       }
  //     } finally {
  //       setIsLoading(false);
  //       SplashScreen.hide();
  //     }
  //   } else {
  //     dispatch(logOut());
  //     SplashScreen.hide();
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   validateToken();
  // }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <NavigationContainer>
          {isLogged ? <AppStack /> : <LogStack />}
        </NavigationContainer>
        {/* {isLoading ? <MyLoader backgroundColor={'#ffff'} /> : null} */}
      </SafeAreaView>
    </>
  );
}

export default RootNavigation;
