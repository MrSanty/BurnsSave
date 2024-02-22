import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Image, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Introduction = () => {
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
          <Image
            source={require('src/assets/logos/burns-save-logo.png')}
            style={styles.logoImage}
          />

          <Text style={styles.title}>¡Bienvenido a Burn App!</Text>
          <View style={styles.containerContent}>
            <View
              style={styles.containerText}
            >
              <Text style={styles.contentText}>
                Dado el problema creciente de salud pública en torno a las quemaduras el cual ha sido
                declarado por la Organización Mundial de la Salud, se ha creado esta aplicación móvil
                donde usted podrá consultar diferentes tipos de información.
              </Text>
              <Text style={styles.contentText}>
                relacionadas con el tema.
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} activeOpacity={0.8}>
              <LinearGradient
                colors={[ '#FFC402', '#FB0860' ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Ingresa</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoImage: {
    alignSelf: 'center',
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: '#2E2F32',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 18,
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'justify',
    textAlignVertical: 'center',
    lineHeight: 25,
    color: 'black',
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 90,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 18,
  }
})

export default Introduction;
