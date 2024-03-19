import { FC } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Image
} from 'react-native';
import { usePodcast } from 'src/hooks/usePodcast';

interface Props {
  url: string;
  title: string;
  artist: string;
}

const Podcast: FC<Props> = ({ url, title, artist }) => {
  const {
    hasAudio,
    loading,
    playing,
    position,
    duration,
    changeState
  } = usePodcast({ url, title, artist });

  return (
    <View style={styles.poscastContainer}>
      {loading ? <ActivityIndicator size='small' /> :
        !hasAudio
          ? (
            <View style={styles.podcastButton}>
              <Pressable onPress={() => changeState('setAudio')}>
                <Image source={require('src/assets/images/escucharPodcast.png')} style={styles.poscastIcon} />
              </Pressable>
            </View>
          )
          : (
            <View style={styles.mainContainer}>
              {
                !playing ? (
                  <Pressable style={styles.alignCenter} onPress={() => changeState('playAudio')}>
                    <Image source={require('src/assets/images/playIcon.png')} style={styles.otherIcon} />
                  </Pressable>
                ) : (
                  <Pressable style={styles.alignCenter} onPress={() => changeState('pauseAudio')}>
                    <Image source={require('src/assets/images/pauseIcon.png')} style={styles.otherIcon} />
                  </Pressable>
                )
              }

              {
                hasAudio && (
                  <Text style={{ color: 'black' }}>
                    {position}/{duration}
                  </Text>
                )
              }
            </View>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  poscastContainer: {
    paddingVertical: 10,
  },
  poscastIcon: {
    width: 120,
    height: 55
  },
  otherIcon: {
    width: 30,
    height: 30
  },
  podcastButton: {
    alignItems: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  alignCenter: {
    alignSelf: 'center'
  }
});

export default Podcast;