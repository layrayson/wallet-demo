import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainHomeScreen from '../tabs/MainHomeScreen';
import AssetsScreen from '../tabs/AssetsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          // tabBarActiveTintColor: '#0066CC',
          // tabBarInactiveTintColor: '#949494',
          // tabBarHideOnKeyboard: true,
          // tabBarAllowFontScaling: true,
          tabBarShowLabel: false,
          // tabBarBadge: undefined,
          // tabBarBadgeStyle: undefined,
          // tabBarBackground: undefined,
          // tabBarIconStyle: undefined,
          // tabBarItemStyle: undefined,
          // tabBarLabel: undefined,
          // tabBarTestID: undefined,
          // tabBarVisibilityAnimationConfig: undefined,
          // tabBarAccessibilityLabel: undefined,
          // tabBarButton: undefined,
          // tabBarPressColor: undefined,
          // tabBarPressOpacity: undefined,
          // lazy: true,
          // freezeOnBlur: false,

          tabBarStyle: {
            height: 96,
            // elevation: 10,
            // shadowColor: '#0000000D',
            // shadowOffset: { width: -2, height: -3 },
            // shadowOpacity: 1,
            // shadowRadius: 4,
            // padding: 0
          },
          tabBarLabelStyle: {
            marginTop: 0,
          },
          // tabBarItemStyle: {
          //   height: 96,
          //   justifyContent: "center",
          // },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({color}) => {
            return (
              <View style={{height: 96}}>
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
                  <Text style={{color, marginTop: 1, fontSize: 14}}>
                    {route.name}
                  </Text>
                </View>
              </View>
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={MainHomeScreen}
          // options={{ tabBarButton: () => null }}
        />
        <Tab.Screen name="Assets" component={AssetsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
