import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import OverAllBalanceDisplay from '../../../components/shared/OverAllBalanceDisplay';
import Icon from 'react-native-vector-icons/Ionicons';


const MainHomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{ minHeight: '100%' }}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{ flex: 1, padding: 16 }}>
        <OverAllBalanceDisplay amount={230456.9084} increment={565.909} />
        <View style={{ flex: 1, marginTop: 24 }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontSize: 32, fontWeight: 700, }}>
              Trends
            </Text>

            <Icon name={"sync"} size={20} style={{ fontWeight: 700 }} />
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default MainHomeScreen;
