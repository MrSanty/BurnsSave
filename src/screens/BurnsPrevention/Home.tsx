import { FC } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


const Home: FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={styles.containerImage}
        >
          <Image
            source={require('src/assets/images/hogar.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.title}>Hogar</Text>
          </View>
          <View style={styles.contentContainer}>
            <ScrollView
              style={{ height: '61%' }}
            >
              <Text style={styles.contentText}>
                Entre las recomendaciones dadas por la OMS se encuentran elevar o cerrar las áreas de cocina, usar la electricidad para la cocción de los alimentos en vez de velas y queroseno, rediseñar las estufas para que proporcionen mayor seguridad, mejorar la construcción de viviendas e instalación de detectores de humo en los hogares y edificaciones públicas y privadas.
              </Text>

              <Text style={styles.contentText}>
                De igual forma se debe educar a los padres, debido a que muchas de las quemaduras se dan por negligencia de éstos al colocar al alcance de los niños líquidos calientes como café, sopas y otros, y por dejar a la mano cableados eléctricos expuestos o conectados a freidoras, termos eléctricos, etc.
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  containerImage: {
    height: 270
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%'
  },
  card: {
    backgroundColor: '#FAF8F9',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 35,
    paddingVertical: 50,
    position: 'absolute',
    height: '100%',
    top: 230,
    width: '100%'
  },
  cardTitle: {
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    color: '#FB0860',
    fontFamily: 'Poppins-Bold',
    fontSize: 23
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10
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
