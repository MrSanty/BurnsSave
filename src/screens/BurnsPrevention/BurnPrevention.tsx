import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ButtonGradient from "src/components/ButtonGradient";
import Card from "src/components/Card";
import Podcast from "src/components/Podcast";
import YoutubePlayer from "src/components/YoutubePlayer";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const BurnPrevention: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 6);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PREVENCIÓN DE</Text>
          <Text style={styles.title}>LAS QUEMADURAS</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Text style={styles.contentText}>
              La prevención se constituye en la estrategia para evitar o disminuir la prevalencia en la presentación de las quemaduras en los diferentes grupos etarios y especialmente en la población pediátrica que es la más susceptible vulnerable en presentar estos eventos traumáticos
            </Text>

            <View style={styles.buttonContainer}>
              <ButtonGradient
                text="Laboral"
                onPress={() => navigation.navigate('Laboral')}
              />
              <ButtonGradient
                text="Hogar"
                onPress={() => navigation.navigate('Hogar')}
              />
            </View>

            <Card title='Podcast'>
              <Podcast
                url='https://audio.jukehost.co.uk/H8RMWfdpikFfgC9SfIdT1eqJHi8Rba88'
                title='Podcast 2'
                artist='Anónimo'
              />
            </Card>

            <Card title="Video">
              <View style={{ height: 200 }}>
                <YoutubePlayer videoId="Pr_gCOyS2H8" />
              </View>
            </Card>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    paddingHorizontal: 25,
    flex: 1,
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 20
  },
  scroll: {
    flexGrow: 0
  }
})

export default BurnPrevention;
