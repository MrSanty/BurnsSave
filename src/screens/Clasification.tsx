import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface ClasificationProps {
  navigation: any;
}

const Clasification = ({ navigation }: ClasificationProps) => {
  useNavigationChange(navigation, 4);

  return (
    <View style={styles.container}>
      <View
        style={styles.containerImage}
      >
        <Image
          source={require('src/assets/images/clasification.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>TIPOS</Text>
          <Text style={styles.title}>DE QUEMADURAS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerImage: {
    height: 270
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%'
  },
  card: {
    backgroundColor: '#FAF8F9',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 35,
    paddingVertical: 50,
    position: 'absolute',
    height: '100%',
    top: 230,
    width: '100%'
  },
  cardTitle: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: {
    color: '#FB0860',
    fontFamily: 'Poppins-Bold',
    fontSize: 23,
    maxHeight: 30,
    minHeight: 25
  },
  contentContainer: {
    alignItems: 'center',
    display: 'flex'
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify'
  },
  linearBorder: {
    borderRadius: 20,
    marginBottom: 20,
    width: '100%'
  },
  pressableButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 2,
    paddingVertical: 5
  }
});

export default Clasification;
