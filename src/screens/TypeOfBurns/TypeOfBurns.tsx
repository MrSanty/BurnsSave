import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { typesOfBurnsRoutes } from 'src/routes/typesOfBurns.routes';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface TypeOfBurnsProps {
  navigation: any;
}

const TypeOfBurns = ({ navigation }: TypeOfBurnsProps) => {
  useNavigationChange(navigation, 3);


  return (
    <View style={styles.container}>
      <View
        style={styles.containerImage}
      >
        <Image
          source={require('src/assets/images/typesImages.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>TIPOS</Text>
          <Text style={styles.title}>DE QUEMADURAS</Text>
        </View>
        <View style={styles.contentContainer}>
          {typesOfBurnsRoutes.slice(1).map(route => (
            <LinearGradient
              colors={[ '#FB0860', '#FFC402' ]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              key={route.key}
              style={styles.linearBorder}
            >
              <Pressable
                onPress={() => navigation.navigate(route.title)}
                style={({ pressed }) => [
                  styles.pressableButton,
                  {
                    backgroundColor: pressed ? 'transparent' : '#fff',
                  },
                  {
                    color: pressed ? '#fff' : '#2E2F32',
                  }
                ]}
              >
                {({ pressed }) => (
                  <Text
                    style={{
                      color: pressed ? '#fff' : '#2E2F32',
                      ...styles.contentText,
                    }}
                  >
                    {route.title}
                  </Text>
                )}
              </Pressable>
            </LinearGradient>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
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

export default TypeOfBurns;
