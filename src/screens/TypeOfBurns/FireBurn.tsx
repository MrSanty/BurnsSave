import { Image, StyleSheet, Text, View } from 'react-native';

const FireBurn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/fire-type.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Quemaduras por fuego</Text>
        </View>
        <Text style={styles.content}>
          Una quemadura térmica o inducida por calor puede ocurrir cuando la piel entra en contacto
          con cualquier fuente de calor, como una sartén, una plancha, el fuego, una superficie
          caliente, o un gas o líquido hirviendo.
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

export default FireBurn;
