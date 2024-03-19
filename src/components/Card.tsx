import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  text?: string;
  isJustified?: boolean;
  children?: any;
}

const Card: FC<Props> = ({ title, text, isJustified = false, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {
        children
          ? children
          : (
            <Text
              style={[ styles.cardText, { textAlign: isJustified ? 'justify' : 'left' } ]}
            >{text}</Text>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 20
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#FB0263',
    marginBottom: 10
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#2E2F32'
  }
})

export default Card;