import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default props => {
  const [isSelected, setSelection] = useState(false);
  return (
    <TouchableOpacity
      onPress={e => {
        props.setSelectedItem(props.item), setSelection(!isSelected);
      }}>
      <View
        style={[
          styles.item,
          props.item === props.selectedItem && styles.active,
        ]}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#aaa',
    margin: 15,
    padding: 15,
    textAlign: 'right',
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
});