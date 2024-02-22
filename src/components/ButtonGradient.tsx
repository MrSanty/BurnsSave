import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import { useRotateAnimate } from "src/hooks/useRotateAnimate";

interface Props {
  text: string;
  onPress: () => void;
  isActive?: boolean;
  isAnimated?: boolean;
  isTransparent?: boolean;
}

const ButtonGradient: FC<Props> = ({
  text,
  onPress,
  isActive = false, 
  isAnimated = false, 
  isTransparent = false 
}) => {
  const { animatedStyle } = useRotateAnimate(0, 180, isActive);

  return (
    <LinearGradient
      colors={isTransparent ? [ 'transparent', 'transparent' ] : [ '#FB0860', '#FFC402' ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearBorder}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressableButton,
          {
            backgroundColor: isTransparent ? 'transparent' : isActive || pressed ? 'transparent' : '#fff',
            borderColor: isTransparent ? '#FFF' : 'transparent',
            borderWidth: isTransparent ? 1 : 0,
            borderRadius: 20
          }
        ]}
      >
        {({ pressed }) => (
          <>
            {
              isAnimated && (
                <Animated.Image
                  source={require('src/assets/icons/arrow-icon.png')}
                  style={[ styles.iconArrow, animatedStyle ]}
                />
              )
            }
            <Text
              style={{
                color: pressed || isTransparent || isActive ? '#fff' : '#2E2F32',
                ...styles.contentText,
              }}
            >
              {text}
            </Text>
          </>
        )}
      </Pressable>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify'
  },
  linearBorder: {
    borderRadius: 20,
    width: '100%'
  },
  pressableButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 2,
    paddingVertical: 5,
    position: 'relative'
  },
  iconArrow: {
    height: 15,
    top: 10,
    left: 20,
    position: 'absolute',
    resizeMode: 'contain',
    width: 15
  }
})

export default ButtonGradient;