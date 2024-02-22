import { Image, StyleSheet, Text, View } from 'react-native';

const ElectricalBurn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/electrical-type.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Quemaduras eléctricas</Text>
        </View>
        <Text style={styles.content}>
          Una quemadura eléctrica es una quemadura de la piel que se produce cuando el cuerpo entra
          en contacto con electricidad. Cuando esto sucede, la electricidad puede transmitirse por
          todo el cuerpo, lo cual puede causar daños en tejidos y órganos.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FAF8F9'
  },
  image: {
    width: '100%',
    maxHeight: 400,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
  },
  textContainer: {
    padding: 30
  },
  contentTitle: {
    marginBottom: 30,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: 170,
    flexWrap: 'wrap',
    color: '#FB0860',
    textAlign: 'center'
  },
  content: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'justify',
    color: '#2E2F32'
  }
})

export default ElectricalBurn;
