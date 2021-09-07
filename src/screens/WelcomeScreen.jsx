import React, { useState, useEffect, useRef, useMemo } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, ErynLogo, Button } from '_components';

const HIDDEN = 0;
const NOT_HIDDEN = 1;
const DURATION = 600;

function useAnimatedOpacityStyle() {
  const [hidden, setHidden] = useState(false);

  const opacity = useRef(
    new Animated.Value(hidden ? HIDDEN : NOT_HIDDEN),
  ).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: hidden ? HIDDEN : NOT_HIDDEN,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [opacity, hidden]);

  const animatedStyle = useMemo(() => ({ opacity }), [opacity]);

  return {
    hidden,
    setHidden,
    animatedStyle,
  };
}

function WelcomeScreen() {
  const { hidden, setHidden, animatedStyle } = useAnimatedOpacityStyle();

  return (
    <SafeAreaView>
      <ErynLogo style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.projectLabel} bold>
          Time Travel Example
        </Text>

        <Text heading bold>
          Welcome!
        </Text>

        <Animated.View style={animatedStyle}>
          <Text center>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            condimentum turpis. Integer non tempus leo.
          </Text>
        </Animated.View>

        <Button
          style={styles.button}
          onPress={() => setHidden((prevState) => !prevState)}>
          Hide Content
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 60,
  },

  content: {
    flex: 1,
    alignItems: 'center',
  },

  projectLabel: {
    fontSize: 30,
    lineHeight: 48,
  },

  button: {
    marginVertical: 20,
  },
});

export default WelcomeScreen;
