import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import CardUser from "src/components/CardUser";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const AboutUs: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 12);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>INVESTIGADORES</Text>
          </View>
          <View style={styles.contentContainer}>
            <CardUser name="Julialba Castellanos Ruiz" />
            <CardUser name="Monica Yamile Pinzón Bernal" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>DESARROLLADORES</Text>
          </View>
          <View style={styles.contentContainer}>
            <CardUser name="Yaneth Mejía Rendón" />
            <CardUser name="Carlos Andrés Zapata" />
            <CardUser name="Juan Camilo Uribe Villa" />
            <CardUser name="Daniel Gutiérrez Duque" />
            <CardUser name="Santiago Quintero Rodriguez" />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    paddingHorizontal: 25
  }
})

export default AboutUs;
