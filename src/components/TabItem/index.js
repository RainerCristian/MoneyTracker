import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  HomeActive,
  HomeNotActive,
  FrameActive,
  FrameNotActive,
} from '../../assets/';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <HomeActive /> : <HomeNotActive />;

    if (label === 'Transaction')
      return isFocused ? <FrameActive /> : <FrameNotActive />;

    return <HomeActive />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.Text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Text: isFocused => ({
    color: isFocused ? '#02CF8E' : '#8D92A3',
  }),
});