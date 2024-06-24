import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import CardUser from "src/components/CardUser";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const AboutUs: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 12);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <ScrollView
          style={{ flexGrow: 0 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>EXPERTAS TEMATICAS</Text>
          </View>
          <View style={styles.mainContainer}>
            <CardUser
              urlImage={require('src/assets/images/julialba.jpeg')}
              name="Julialba Castellanos Ruiz"
              email="jcastellanos@autonoma.edu.co"
              cvlac="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001144502"
            />
            <CardUser
              urlImage={require('src/assets/images/monica.jpeg')}
              name="Monica Yamile Pinzón Bernal"
              email="myamile@autonoma.edu.co"
              cvlac="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001152904"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>EQUIPO DE DESARROLLO</Text>
          </View>
          <View style={[styles.mainContainer, { paddingBottom: 20 } ]}>
            <CardUser
              urlImage={require('src/assets/images/Carlos.jpeg')}
              name="Carlos Andrés Zapata"
              email="czapata@autonoma.edu.co"
              cvlac="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000814342"
            />
            <CardUser
              urlImage={require('src/assets/images/Santiago.jpg')}
              name="Santiago Quintero Rodriguez"
              email="santiagoquinteror@autonoma.edu.co"
              cvlac="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002213219"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  mainContainer: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 25
  }
})

export default AboutUs;
