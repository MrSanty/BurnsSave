import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonGradient from "src/components/ButtonGradient";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const BurnManage: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 9);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MANEJO INICIAL DE</Text>
          <Text style={styles.title}>LAS QUEMADURAS</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            La asistencia inmediata del quemado es muy similar a la de cualquier accidentado con la peculiaridad de qué lo primero que se debe hacer, si no olvida nuestra propia seguridad, es parar el proceso de la quemadura; es decir, eliminar la causa.
          </Text>

          <View style={styles.buttonContainer}>
            <ButtonGradient
              text="Actuaciones generales"
              onPress={() => navigation.navigate('General')}
            />
            <ButtonGradient
              text="Conducta general al seguir"
              onPress={() => navigation.navigate('Conduct')}
            />
            <ButtonGradient
              text="Lo que NO se debe hacer"
              onPress={() => navigation.navigate('Prohibited')}
            />
          </View>
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
  },
  buttonContainer: {
    gap: 30
  }
})

export default BurnManage;
