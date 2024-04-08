import { FC } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


const Labor: FC = () => {

  return (
    <View style={styles.container}>
      <View
        style={styles.containerImage}
      >
        <Image
          source={require('src/assets/images/laboral.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitle}>
        <Text style={styles.title}>LABORAL</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            style={{ flexGrow: 0 }}
          >
            <Text style={styles.contentText}>
            Se recomienda seguir realizando campañas educativas encaminadas a la prevención y concientización del control de los factores de riesgo en el contexto laboral frente a la exposición que implica el incumplimiento de las normas de seguridad propias de cada profesión u ocupación desempeñada, el uso de equipamientos de protección personal y ropa ignífuga en actividades laborales de riesgo donde haya una posibilidad de exposición.
          </Text>
          </ScrollView>
        </View>
      </View>
    </View>
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
    gap: 10,
    flex: 1
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  }
})

export default Labor;
