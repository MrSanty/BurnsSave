import { FC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigationChange } from 'src/hooks/useNavigationChange';
import LinearGradient from "react-native-linear-gradient";
import ComplicationItem from "src/components/ComplicationItem";

interface Props {
  navigation: any;
}

const Complications: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 5);

  return (
    <View style={styles.container}>
      <View
        style={styles.containerImage}
      >
        <Image
          source={require('src/assets/images/complication.png')}
          style={styles.image}
        />
      </View>

      <LinearGradient
        colors={[ '#FB0561', '#FFC303' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        <View style={styles.cardTitle}>
          <Text style={styles.title}>COMPLICACIONES</Text>
          <Text style={styles.title}>DE LAS QUEMADURAS</Text>
        </View>

        <View style={styles.scroll}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <ComplicationItem
              title="Funcionales"
              content="están asociadas a la perdida de los rangos de movilidad articular, amputaciones, disminución de la apertura de la boca, perdida de la audición y la visión, entre otras; en general son aquellas que pueden provocar algún grado de discapacidad y perdida de la independencia."
              maxHeigth={100}
            />
            <ComplicationItem
              title="Estéticas"
              content="son aquellas que afectan la imagen y el esquema corporal, afectan tanto la calidad de vida y el bienestar emocional de quien la padece. Pueden estar provocadas por cicatrices, deformidades y alteraciones en la pigmentación de la piel."
              secondContent="Las secuelas estéticas de las quemaduras, además de estar asociadas con las secuelas funcionales, llevan a la persona a aislamiento debido al miedo o al rechazo y a los problemas psicológicos y emocionales derivados de esta lesión."
              maxHeigth={145}
            />
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerImage: {
    height: 370,
    alignItems: 'center',
  },
  image: {
    height: '80%',
    resizeMode: 'cover',
    width: '80%'
  },
  card: {
    backgroundColor: '#FAF8F9',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 35,
    paddingVertical: 50,
    position: 'absolute',
    height: '100%',
    top: 340,
    width: '100%'
  },
  cardTitle: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 23,
    maxHeight: 30,
    minHeight: 25
  },
  contentContainer: {
    alignItems: 'center'
  },
  scroll: {
    width: '100%',
    height: '43%'
  }
})

export default Complications;
