import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ButtonGradient from './ButtonGradient';
import { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Clasification } from 'src/types/routes';

interface Props {
  item: Clasification
}

const DegreeItem: FC<Props> = ({ item }) => {
  const [ isActive, setIsActive ] = useState(false);
  const heightValue = useSharedValue(0);

  const heightStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
    overflow: 'hidden'
  }))

  useEffect(() => {
    heightValue.value = withTiming(isActive ? 145 : 0, { duration: 200 });
  }, [ isActive ])

  return (
    <View style={styles.container}>
      <ButtonGradient
        text={item.title}
        isActive={isActive}
        isAnimated={true}
        onPress={() => setIsActive(!isActive)}
      />
      <Animated.View style={[ styles.content, heightStyle ]}>
        <Text style={styles.textRegular}>
          <Text style={styles.textBold}>
            Conversesmith:
          </Text>
          {' '}{item.conversesmith}
        </Text>
        <Text style={styles.textRegular}>
          <Text style={styles.textBold}>
            Denominación ABA:
          </Text>
          {' '}{item.denominationABA}
        </Text>
        <Text style={styles.textRegular}>
          <Text style={styles.textBold}>
            Nivel Histológico:
          </Text>
          {' '}{item.histologycLevel}
        </Text>
        <Text style={styles.textRegular}>
          <Text style={styles.textBold}>
            Pronóstico:
          </Text>
          {' '}{item.pronostic}
        </Text>
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
  textBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: '#2E2F32',
  },
  textRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    width: 'auto',
    color: '#2E2F32'
  }
})

export default DegreeItem;