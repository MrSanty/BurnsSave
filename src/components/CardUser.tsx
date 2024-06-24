import { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinkText } from './Link';

interface Props {
  urlImage: any;
  name: string;
  text?: string;
  email: string;
  cvlac: string;
}


const CardUser: FC<Props> = ({ urlImage, name, text, email, cvlac }) => {
  return (
    <View style={[ styles.card, { width: '100%' } ]}>
      <View style={styles.photoCard}>
        <Image
          source={urlImage}
          style={styles.profile}
        />
      </View>
      <View style={styles.titleCard}>
        <Text style={styles.titleC}>{name}</Text>
      </View>
      <View style={styles.bodyCard}>
        {text && <Text style={styles.textC}>{text}</Text>}
        <Text style={styles.textC}>{email}</Text>
        <LinkText
          customStyle={styles.link}
          name="Cvlac"
          url={cvlac}
        />
      </View>
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
  link: {
    textAlign: 'center',
    fontSize: 15,
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