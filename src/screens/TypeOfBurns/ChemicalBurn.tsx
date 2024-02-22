import { Image, StyleSheet, Text, View } from 'react-native';

const ChemicalBurn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/chemical-type.png')} style={styles.image} />

      <View style={styles.padding30}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Quemaduras por químicos</Text>
        </View>
        <Text style={styles.content}>
          Las quemaduras químicas son daños a los tejidos provocados por ácidos fuertes, limpiadores
          para el desagüe, diluyente de pintura, gasolina y muchas otras sustancias. Por lo general,
          la persona se percata de dicha quemadura y su causa.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF8F9',
    flex: 1,
    width: '100%'
  },
  image: {
    alignSelf: 'flex-start',
    width: '100%',
    resizeMode: 'cover',
    maxHeight: 400
  },
  padding30: {
    padding: 30
  },
  contentTitle: {
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    color: '#FB0860',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: 170
  },
  content: {
    color: '#2E2F32',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'justify'
  }
})

export default ChemicalBurn;
