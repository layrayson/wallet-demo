import {ScrollView, View} from 'react-native';
import React from 'react';
import OverAllBalanceDisplay from '../../../components/shared/OverAllBalanceDisplay';

const MainHomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{minHeight: '100%'}}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1, padding: 16}}>
        <OverAllBalanceDisplay amount={230456.9084} increment={565.909} />
      </View>
    </ScrollView>
  );
};

export default MainHomeScreen;
