import { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

interface Props {
  urlImage: any;
  name: string;
  fullWidth?: boolean;
  text?: string;
}


const CardUser: FC<Props> = ({ urlImage, name, fullWidth, text }) => {
  return (
      <View style={[styles.card, fullWidth && { width: '100%' }]}>
        <View style={styles.photoCard}>
          <Image
            source={urlImage}
            style={styles.profile}
          />
        </View>
        <View style={styles.titleCard}>
          <Text style={styles.titleC}>{name}</Text>
        </View>

        {
          fullWidth && (
            <View style={styles.bodyCard}>
              <Text style={styles.textC}>{text}</Text>
            </View>
          )
        }
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 150,
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
    paddingVertical: 5,
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
  },
  bodyCard: {
    padding: 5
  },
  textC: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
    textAlign: 'center'
  }
})

export default CardUser