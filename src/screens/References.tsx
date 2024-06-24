import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const References: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 10);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Referencias</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.listContainer}>
            <Image
              source={require('src/assets/icons/item.png')}
              style={styles.itemIcon}
            />
            <Text style={styles.listText}>
              Organización Mundial de la Salud OMS. Burns. Documento recuperado el día 03 de junio de 2022.
            </Text>
          </View>
          <View style={styles.listContainer}>
            <Image
              source={require('src/assets/icons/item.png')}
              style={styles.itemIcon}
            />
            <Text style={styles.listText}>
              Secretaría de Estado de la Seguridad Social Gobierno de España. (2020). Manual de primeros auxilios en la empresa. MC Mutual.
            </Text>
          </View>
          <View style={styles.listContainer}>
            <Image
              source={require('src/assets/icons/item.png')}
              style={styles.itemIcon}
            />
            <Text style={styles.listText}>
              Jeschke MG, van Baar ME, Choudhry MA, Chung KK, Gibran NS, Logsetty S. Burn injury. Nat Rev Dis Primers. 2020 Feb 13;6(1):11. doi: 10.1038/s41572-020-0145-5. PMID: 32054846; PMCID: PMC7224101.
            </Text>
          </View>
          <View style={styles.listContainer}>
            <Image
              source={require('src/assets/icons/item.png')}
              style={styles.itemIcon}
            />
            <Text style={styles.listText}>
              Castellanos Ruíz, J., y Pinzón Bernal, M. Y. El ejercicio terapéutico en paciente pediátrico quemado. Movimiento científico, 6(1), 92-100. 2012.
            </Text>
          </View>
          <View style={styles.listContainer}>
            <Image
              source={require('src/assets/icons/item.png')}
              style={styles.itemIcon}
            />
            <Text style={styles.listText}>
              Castellanos Ruiz, J. Pinzón Bernal, MY. Manejo fisioterapeutico del dolor en personas quemadas en sus tres fases de recuperación: revisión sistemática. Rev. Soc. Esp. Dolor. 2016, vol.23, n.4, pp.202-210. ISSN 1134-8046.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 80,
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

export default References;
