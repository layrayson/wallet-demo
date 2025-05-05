import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainHomeScreen from '../tabs/MainHomeScreen';
import AssetsScreen from '../tabs/AssetsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppText} from '../../components/custom/AppText';
import {AppColors} from '../../theme/color';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            elevation: 0,
          },
          tabBarLabelStyle: {
            marginTop: 0,
          },
          tabBarActiveTintColor: AppColors.green[500],
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({color}) => {
            return (
              <View>
                <View
                  style={{
                    height: 2.05,
                    margin: 'auto',
                  }}></View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {(() => {
                    if (route.name === 'Home') {
                      return (
                        <Icon name="home-outline" size={24} color={color} />
                      );
                    } else if (route.name === 'Assets') {
                      return (
                        <Icon name="wallet-outline" size={24} color={color} />
                      );
                    }
                  })()}
                  <AppText style={{color, marginTop: 1, fontSize: 12}}>
                    {route.name}
                  </AppText>
                </View>
              </View>
            );
          },
        })}>
        <Tab.Screen name="Home" component={MainHomeScreen} />
        <Tab.Screen name="Assets" component={AssetsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
