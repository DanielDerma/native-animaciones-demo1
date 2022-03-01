import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const translation1 = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const translation3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(125, [
      Animated.timing(translation1, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translation2, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translation3, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          marginBottom: 10,
          opacity: translation1,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
          marginBottom: 10,
          opacity: translation2,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          marginBottom: 10,
          opacity: translation3,
        }}
      />
    </>
  );
}
