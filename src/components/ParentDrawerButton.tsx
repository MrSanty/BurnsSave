import { RouteDrawer } from "src/types/routes";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";

interface DrawerParentButtonProps {
  returnToPreviousItem: (item: RouteDrawer) => void;
  updateItems: (item: RouteDrawer) => void;
  route: RouteDrawer;
  isActive: boolean;
}

const ParentDrawerButton = ({ returnToPreviousItem, updateItems, route, isActive }: DrawerParentButtonProps) => {
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [ { rotate: `${rotation.value}deg` } ],
    };
  });

  useEffect(() => {
    rotation.value = withTiming(isActive ? 180 : 0, { duration: 200 });
  }, [ isActive ]);


  const handlePress = () => {
    if (isActive) {
      returnToPreviousItem(route)
    } else {
      updateItems(route)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View
        style={styles.button}
      >
        {
          route?.children && (
            <Animated.Image
              source={require('src/assets/icons/arrow-icon.png')}
              style={[ styles.iconArrow, animatedStyle ]}
            />
          )
        }
        <Text
          style={styles.textButton}
        >
          {
            route.title
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
    alignItems: 'center',
    position: 'relative'
  },
  iconArrow: {
    width: 10,
    height: 10,
    left: 20,
    position: 'absolute',
    resizeMode: 'contain'
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginLeft: 50,
    fontSize: 13
  },
});

export default ParentDrawerButton;