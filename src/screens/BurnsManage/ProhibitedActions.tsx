import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const ProhibitedActions: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Lo que NO se debe hacer</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
              Evitaremos la aplicación de pomadas, lociones o ungüentos sobre las quemaduras.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
              No efectuaremos remedios caseros como aplicar grasas, pasta de dientes, aceite, vinagre, etc.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
              Tampoco se aplicará hielo sobre la superficie quemada, pues puede agravar la lesión.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
              No utilizaremos algodón ni apósitos que puedan dejar “pelusilla”, pues se adhieren a la quemadura.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
              Las ampollas no deberán pincharse ni aplicar apósitos que comprima excesivamente y pudieran reventarlas, pues al perder la integridad de la piel aumenta el riesgo de infección.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
              Cuando las quemaduras sean por productos químicos, nunca deberá intentar neutralizarlos con otro producto químico.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  titleContainer: {
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    paddingHorizontal: 25
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  },
  listContainer: {
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10
  },
  listText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
  },
  itemIcon: {
    width: 10,
    height: 10
  }
})

export default ProhibitedActions;
