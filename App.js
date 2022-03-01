import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      backgroundColor: "yellow",
      transform: [{ translateX: translation }],
    },
  });
  return <Animated.View style={styles.container} />;
}
