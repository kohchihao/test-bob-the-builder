import * as React from 'react';
import { Text } from 'react-native';

type Props = {
  size: string;
};

const Avatar = (props: Props) => {
  return <Text>{props.size}</Text>;
};

export default Avatar;
