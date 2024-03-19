import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
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
            <CardUser
              urlImage={require('src/assets/icons/icon.png')}
              name="Julialba Castellanos Ruiz"
            />
            <CardUser
              urlImage={require('src/assets/icons/icon.png')}
              name="Monica Yamile Pinzón Bernal"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>DESARROLLADORES</Text>
          </View>
          <View style={styles.secondContainer}>
            <CardUser
              urlImage={require('src/assets/icons/icon.png')}
              name="Carlos Andrés Zapata"
              text="FullStack Developer"
              fullWidth
            />
            <CardUser
              urlImage={require('src/assets/images/Santiago.jpg')}
              name="Santiago Quintero Rodriguez"
              text="FullStack Developer"
              fullWidth
            />
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
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  secondContainer: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 25
  }
})

export default AboutUs;
