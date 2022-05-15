import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header_Home} from '../../components';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  yourBalance: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 13,
    marginTop: 20,
    paddingBottom: 40,
  },
  addTransaction: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 10.6,
    marginTop: 20,
    paddingBottom: 71.27,
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    paddingTop: 10.6,
    color: '#000000',
  },
  yourBalanceText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 16,
    paddingLeft: 50,
    color: '#000000',
  },
  textLeft: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingTop: 20,
  },
  textRight: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingLeft: 20,
    paddingTop: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
      <Header_Home title="Money Tracker" subTitle="Track your money" />
      <View style={styles.yourBalance}>
        <Text style={styles.title}>Your Balance</Text>
        <Text style={styles.yourBalanceText}>Rp. 10.000.000</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 18,
          }}
        />
        <View style={styles.wrapper}>
          <Text style={styles.textLeft}>Cash On Hand</Text>
          <Text style={styles.textRight}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.textLeft}>Cash On Bank</Text>
          <Text style={styles.textRight}>Rp. 6.000.000</Text>
        </View>
      </View>
      <View style={styles.addTransaction}>
        <Text style={styles.title}>Add Transaction</Text>
        <Gap height={8.81} />
        <Button
          textColor="#020202"
          title={'Cash On Hand'}
          onPress={() => navigation.navigate('TransactionHand')}
        />
        <Gap height={18.04} />
        <Button
          textColor="#020202"
          title={'Cash On Bank'}
          onPress={() => navigation.navigate('TransactionBank')}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;