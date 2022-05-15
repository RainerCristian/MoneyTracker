import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    marginTop: 24,
    paddingBottom: 52,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 10,
    paddingTop: 11,
    padding: 5,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 7.5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  textDate: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  textItems: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  textPriceMinus: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#D9435E',
    alignItems: 'flex-end',
  },
  textPricePlus: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#1ABC9C',
    alignItems: 'flex-end',
  },
});

const TransactionBank = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title="Cash On Bank" onBack={() => navigation.goBack()} />
        <View style={styles.contentWrapper}>
          <TextInput title={'Description'} placeholder="Add the description" />
          <Gap height={17} />
          <TextInput title={'Type'} placeholder="Debit / Credit" />
          <Gap height={24} />
          <Button title={'Save'} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Last 3 Transactions</Text>
          <View style={styles.items}>
            <View>
              <Text style={styles.textDate}>17 April 2020</Text>
              <Text style={styles.textItems}>Water, Food</Text>
            </View>
            <View>
              <Text style={styles.textPriceMinus}>-Rp.300.000</Text>
            </View>
          </View>
          <View style={styles.items}>
            <View>
              <Text style={styles.textDate}>18 April 2020</Text>
              <Text style={styles.textItems}>Office supplies</Text>
            </View>
            <View>
              <Text style={styles.textPriceMinus}>-Rp.300.000</Text>
            </View>
          </View>
          <View style={styles.items}>
            <View>
              <Text style={styles.textDate}>19 April 2020</Text>
              <Text style={styles.textItems}>Top up</Text>
            </View>
            <View>
              <Text style={styles.textPricePlus}>+Rp.300.000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionBank;
