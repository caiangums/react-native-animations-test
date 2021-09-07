import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import { Text } from '_components';

function Button({ style, onPress, children }) {
  const combinedStyles = [styles.button, style];

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View style={[...combinedStyles, pressed && styles.pressed]}>
          <Text center bold style={styles.text}>
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: '#228C22',
  },

  text: {
    color: '#C0EC83',
  },

  pressed: {
    opacity: 0.6,
  },
});

export default Button;
