import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const GeneralPerformances: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Actuaciones generales:</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            La asistencia inmediata del quemado es muy similar a la de cualquier accidentado con la peculiaridad de que lo primero que se debe hacer, sin olvidar nuestra propia seguridad, es parar el proceso de la quemadura; es decir, eliminar la causa.
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    paddingHorizontal: 25
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  }
})

export default GeneralPerformances;
