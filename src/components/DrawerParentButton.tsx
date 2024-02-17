import { RouteDrawer } from "src/types/routes";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";

interface DrawerParentButtonProps {
  returnToPreviousItem: (item: RouteDrawer) => void;
  updateItems: (item: RouteDrawer) => boolean;
  item: RouteDrawer;
  isActive: boolean;
}

const DrawerParentButton = ({ returnToPreviousItem, updateItems, item, isActive }: DrawerParentButtonProps) => {
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withTiming(isActive ? 180 : 0, { duration: 200 });
  }, []);


  const handlePress = () => {
    if (isActive) {
      returnToPreviousItem(item)
    } else {
      updateItems(item)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View
        style={styles.button}
      >
        <Animated.Image
          source={require('src/assets/icons/arrow-icon.png')}
          style={[ styles.iconArrow, animatedStyle ]}
        />
        <Text
          style={styles.textButton}
        >
          {
            isActive 
              ? item?.parent
              : item?.title
          }
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    borderTopColor: 'white',
    borderTopWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconArrow: {
    width: 10,
    height: 10,
    marginLeft: 20,
    resizeMode: 'contain'
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginLeft: 20,
    fontSize: 13
  },
});

export default DrawerParentButton;