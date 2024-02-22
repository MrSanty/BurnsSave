import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const ConductGuidelines: FC = () => {
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
            <Text style={styles.title}>Conducta general a seguir</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
              Ante todo y antes de tratar las diferentes quemaduras, adoptaremos siempre medidas de autoprotección.
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                Apartar al lesionado del agente causante de la quemadura, si el agente causante de la quemadura es eléctrico, se debe cortar el suministro eléctrico antes de entrar en contacto para socorrerlo.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                Enfriar la zona afectada con agua a temperatura ambiente, como mínimo durante 10 minutos; también se puede cubrir la superficie con apósitos húmedos o sábanas húmedas para evitar la extensión de la lesión y disminuir el dolor.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                Cuando la piel pierda su integridad o la quemadura sea extensa, deberá cubrirse para evitar el riesgo de infección, utilizando apósitos o gasas estériles y en ausencia de los mismos podrían emplearse toallas, sábanas o pañuelos siempre que estén completamente limpios. Evitaremos el contacto directo de las quemaduras con las manos o superficies que puedan estar contaminadas.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                Siempre protegeremos nuestras manos del contacto con estas sustancias y se retirarán objetos que puedan comprimir las extremidades como pulseras, anillos, etc.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                Si las ropas del individuo están ardiendo, apagaremos las llamas y se evitará que la víctima por miedo o dolor empiece a correr y avive el fuego. Le atenderemos en el suelo y utilizaremos para sofocar las llamas una manta, toallas, abrigos, etc. que no sean de material sintético. En último caso se le puede hacer rodar por el suelo.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                En quemaduras graves que afecten a los dedos, colocaremos gasas húmedas estériles entre ellos para evitar que se adhieran. Si las quemaduras afectan a las extremidades, las mantendremos elevadas para evitar que se hinchen (edemas).
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Image
                source={require('src/assets/icons/item.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.listText}>
                En las quemaduras químicas (causticaciones) por ácidos o álcalis, se procederá rápidamente al lavado abundante con agua, preferiblemente con ducha evitando que la presión del chorro pueda erosionarla. Se mantendrá durante unos 20 minutos. Tras eliminar el corrosivo se cubrirá la lesión con apósitos limpios y se remitirá para valoración especializada.
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
    fontSize: 16,
    textAlign: 'justify',
    color: '#2E2F32',
  },
  itemIcon: {
    width: 10,
    height: 10
  }
})

export default ConductGuidelines;
