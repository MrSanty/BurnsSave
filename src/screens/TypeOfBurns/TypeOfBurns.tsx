import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { typesOfBurnsRoutes } from 'src/routes/typesOfBurns.routes';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useRouteContext } from 'src/hooks/useRouteContext';
import { useEffect } from 'react';

interface TypeOfBurnsProps {
  navigation: any;
}

const TypeOfBurns = ({ navigation }: TypeOfBurnsProps) => {
  const { setCurrentRoute } = useRouteContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCurrentRoute(3);
    });

    return unsubscribe;
  }, [ navigation ]);


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
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FAF8F9',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    top: 230,
    paddingHorizontal: 35,
    paddingVertical: 50
  },
  cardTitle: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: {
    fontFamily: 'Poppins-Bold',
    minHeight: 25,
    maxHeight: 30,
    fontSize: 23,
    color: '#FB0860'
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center'
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
    borderRadius: 20,
    margin: 2,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#fff'
  }
});

export default TypeOfBurns;
