import { Image, StyleSheet, Text, View } from 'react-native';

const ChemicalBurn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/chemical-type.png')} style={styles.image} />

      <View style={styles.textContainer}>
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
  );
};

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
});

export default ChemicalBurn;
