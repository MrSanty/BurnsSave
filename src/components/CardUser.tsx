import { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

interface Props {
  name: string;
}


const CardUser: FC<Props> = ({ name }) => {
  return (
      <View style={styles.card}>
        <View style={styles.photoCard}>
          <Image
            source={require('src/assets/icons/icon.png')}
            style={styles.profile}
          />
        </View>
        <View style={styles.titleCard}>
          <Text style={styles.titleC}>{name}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 160,
    elevation: 4,
    borderRadius: 10,
    position: 'relative',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  titleCard: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  photoCard: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 100
  },
  titleC: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#000',
    textAlign: 'center'
  },
  profile: {
    borderRadius: 200,
    maxHeight: 80,
    maxWidth: 80,
    overflow: 'hidden',
    resizeMode: "contain"
  }
})

export default CardUser