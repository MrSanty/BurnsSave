import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ButtonGradient from './ButtonGradient';
import { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  content: string;
  maxHeigth: number;
  secondContent?: string;
}

const ComplicationItem: FC<Props> = ({ title, content, maxHeigth, secondContent }) => {
  const [ isActive, setIsActive ] = useState(false);
  const heightValue = useSharedValue(0);

  const heightStyle = useAnimatedStyle(() => ({
    height: heightValue.value
  }))

  useEffect(() => {
    heightValue.value = withTiming(isActive ? maxHeigth : 0, { duration: 200 });
  }, [ isActive ])

  return (
    <View style={styles.container}>
      <ButtonGradient
        text={title}
        isActive={isActive}
        isAnimated={true}
        isTransparent={true}
        onPress={() => setIsActive(!isActive)}
      />
      <Animated.View style={[ styles.content, heightStyle ]}>
        <Text style={styles.textRegular}>
          {content}
        </Text>
        {
          secondContent && (
            <Text style={styles.textRegular}>
              {secondContent}
            </Text>
          )
        }
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    gap: 10
  },
  content: {
    paddingLeft: 10,
    gap: 2
  },
  textRegular: {
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    width: 'auto',
  }
})

export default ComplicationItem;