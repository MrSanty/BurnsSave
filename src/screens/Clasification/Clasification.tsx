import { FC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import DegreeItem from "src/components/DegreeItem";
import { useNavigationChange } from 'src/hooks/useNavigationChange';
import data from "./data";

interface Props {
  navigation: any;
}

const Clasification: FC<Props> = ({ navigation }) => {
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
          <Text style={styles.title}>CLASIFICACIÓN</Text>
          <Text style={styles.title}>DE LAS QUEMADURAS</Text>
        </View>

        <View style={styles.containerContent}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            {
              data.map((item) => (
                <DegreeItem key={item.id} item={item} />
              ))
            }
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

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
  containerContent: {
    flex: 1/1.8,
    paddingBottom: 15
  },
  scroll: {
    flexGrow: 0
  }
})

export default Clasification;
