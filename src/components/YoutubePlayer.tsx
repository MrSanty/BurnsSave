import { Component, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

interface Props {
  videoId: string;
}

const YoutubePlayer: FC<Props> = ({ videoId }) => {

  return (
    <View style={styles.videoContainter}>
      <YoutubeIframe height={200} play={false} videoId={videoId} />
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainter: {
    marginVertical: 20
  }
})

export default YoutubePlayer;