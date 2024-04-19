import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Image, Text, StyleSheet, StatusBar, BackHandler, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonGradient from 'src/components/ButtonGradient';

const Consent = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FAF8F9"
        translucent
      />
      <View style={styles.flexContainer}>
        <ImageBackground
          source={require('src/assets/images/background.jpg')}
          style={styles.container}
        >
          <View style={styles.containerContent}>
            <ScrollView
              style={styles.scroll}
            >
              <Text style={styles.title}>
                BIENVENIDO BURNSAVE APP PROGRAM:
              </Text>

              <Text style={styles.contentText}>
                Conozco y acepto que esta aplicación móvil es informativa y está basada en la evidencia científica, constructo de productos de investigación y que los datos aquí consignados son recomendaciones generales que se deben considerar teniendo en cuenta el criterio profesional, la condición clínica de la persona quemada, los factores contextuales y los recursos disponibles.
                {'\n\n'}
                Libero de toda responsabilidad a los investigadores, desarrolladores y la institución promotora de la app de cualquier procedimiento que se salga de los estándares y recomendaciones entregadas.
              </Text>

              <View
                style={{
                  paddingTop: 20,
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <ButtonGradient
                  text='Aceptar'
                  onPress={() => navigation.navigate('Introduction')}
                />
                <ButtonGradient
                  text='Rechazar'
                  onPress={() => BackHandler.exitApp()}
                />
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#2E2F32',
    marginBottom: 10,
    fontSize: 18,
  },
  containerContent: {
    paddingVertical: 30,
    flex: 1,
    paddingHorizontal: 20
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 25,
    color: 'black'
  },
  scroll: {
    flexGrow: 0,
  },
});

export default Consent;
