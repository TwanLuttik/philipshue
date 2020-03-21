import * as React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <TouchableHighlight>
      <Text onPress={() => {navigation.goBack()}} >1</Text>
      <Text>2</Text>
    </TouchableHighlight>
  )
}