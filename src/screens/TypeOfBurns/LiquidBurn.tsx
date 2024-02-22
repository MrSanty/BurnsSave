import { Image, StyleSheet, Text, View } from 'react-native';

const LiquidBurn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/liquid-type.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Líquido caliente o escaldaduras</Text>
        </View>
        <Text style={styles.content}>
          Se producen por infusiones con sopas, líquidos calientes, durante el baño llevando a
          diferentes tipos de profundidad dependiendo del tipo de exposición. Se puede producir
          también por aceite caliente y grasas que pueden generar quemaduras de espesores completos.
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

export default LiquidBurn;
