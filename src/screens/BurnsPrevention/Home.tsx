import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Home: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hogar</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
          Entre las recomendaciones dadas por la OMS se encuentran elevar o cerrar las áreas de cocina, usar la electricidad para la cocción de los alimentos en vez de velas y queroseno, rediseñar las estufas para que proporcionen mayor seguridad, mejorar la construcción de viviendas e instalación de detectores de humo en los hogares y edificaciones públicas y privadas.
          </Text>
          
          <Text style={styles.contentText}>
          De igual forma se debe educar a los padres, debido a que muchas de las quemaduras se dan por negligencia de éstos al colocar al alcance de los niños líquidos calientes como café, sopas y otros, y por dejar a la mano cableados eléctricos expuestos o conectados a freidoras, termos eléctricos, etc.
          </Text>
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
  }
})

export default Home;
