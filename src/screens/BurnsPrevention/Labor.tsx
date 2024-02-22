import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const Labor: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 2);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LABORAL</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Se recomienda seguir realizando campañas educativas encaminadas a la prevención y concientización del control de los factores de riesgo en el contexto laboral frente a la exposición que implica el incumplimiento de las normas de seguridad propias de cada profesión u ocupación desempeñada, el uso de equipamientos de protección personal y ropa ignífuga en actividades laborales de riesgo donde haya una posibilidad de exposición.
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

export default Labor;
