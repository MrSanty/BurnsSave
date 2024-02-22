import { FC, useEffect } from "react";
import { RouteDrawer } from "src/types/routes";
import { BackHandler, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated from "react-native-reanimated";
import { useRotateAnimate } from "src/hooks/useRotateAnimate";

interface Props {
  returnToPreviousItem: (item: RouteDrawer) => void;
  updateItems: (item: RouteDrawer) => void;
  route: RouteDrawer;
  isActive: boolean;
}

const ParentDrawerButton: FC<Props> = ({ returnToPreviousItem, updateItems, route, isActive }) => {
  const { animatedStyle } = useRotateAnimate(0, 180, isActive);

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
          style={[
            styles.textButton,
            {
              fontFamily: isActive ? 'Poppins-Bold' : 'Poppins-Regular'
            }
          ]}
        >
          {
            route.title
          }
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    borderTopColor: 'white',
    borderTopWidth: 0.5,
    flexDirection: 'row',
    paddingVertical: 10,
    position: 'relative',
    width: '100%'
  },
  iconArrow: {
    height: 10,
    left: 20,
    position: 'absolute',
    resizeMode: 'contain',
    width: 10
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 13,
    marginLeft: 50
  }
})

export default ParentDrawerButton;