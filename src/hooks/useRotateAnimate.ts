import { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export const useRotateAnimate = (initialValue: number, endValue: number, isActive: boolean) => {
  const rotation = useSharedValue(initialValue);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withTiming(isActive ? endValue : initialValue, { duration: 300 });
  }, [isActive]);

  return {
    animatedStyle
  }
}
