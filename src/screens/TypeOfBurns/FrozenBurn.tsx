import { Image, StyleSheet, Text, View } from 'react-native';

const FrozenBurn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/frozen-type.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Quemaduras por congelación</Text>
        </View>
        <Text style={styles.content}>
          La quemadura por congelación es un daño en la piel debido al congelamiento, producto de
          una exposición prolongada a temperaturas frías, por lo general, debajo de los 32° F (0°
          C). Se produce cuando se forman cristales de hielos en la piel o en el tejido más
          profundo.
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
    width: 210,
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

export default FrozenBurn;
