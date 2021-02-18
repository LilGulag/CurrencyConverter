import React from "react";

import { TouchableOpacity, View, Text } from "react-native";

export default () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Convert! </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Settings </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Support the Dev! </Text>
      </TouchableOpacity>
    </View>
  );
};
