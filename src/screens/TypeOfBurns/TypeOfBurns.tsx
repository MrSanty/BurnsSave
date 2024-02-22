import { FC } from "react";
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { typesOfBurnsRoutes } from 'src/routes/typesOfBurns.routes';
import { useNavigationChange } from 'src/hooks/useNavigationChange';
import ButtonGradient from "src/components/ButtonGradient";

interface TypeOfBurnsProps {
  navigation: any;
}

const TypeOfBurns: FC<TypeOfBurnsProps> = ({ navigation }) => {
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
          {
            typesOfBurnsRoutes.slice(1).map(route => (
              <ButtonGradient
                key={route.key}
                text={route.title}
                onPress={() => navigation.navigate(route.title)}
              />
            ))
          }
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
    flexDirection: 'column',
    gap: 20
  }
});

export default TypeOfBurns;
