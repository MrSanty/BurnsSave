import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface DefinitionProps {
  navigation: any;
}

const Definition = ({ navigation }: DefinitionProps) => {
  useNavigationChange(navigation, 2);


  /* Las quemaduras son un trauma directo sobre la piel u otro tejido primario que
puede ser causado por diferentes agentes como productos químicos, líquidos y
sólidos calientes o aquellos agentes que producen llamas.

Organización Mundial de la Salud OMS. Burns. https://www.who.int/news-
room/fact-sheets/detail/burns . Documento recuperado el día 03 de junio de 2022.

Se entiende por quemadura un conjunto de fenómenos locales y sistémicos que
resultan de la acción de muy alta temperatura, electricidad o algunos agentes
químicos , así como por agentes fríos. Las quemaduras se pueden producir en
cualquier lugar del organismo, pero son mucho más frecuentes en la piel pudiendo
incluir los tejidos adyacentes, ocasionando un desequilibrio bioquímico por
desnaturalización proteica, edema y pérdida del volumen del líquido intravascular,
debido a un aumento de la permeabilidad.

Libro de quemados juli y monica */

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>DEFINICIÓN</Text>
          <Text style={styles.title}>DE QUEMADURA</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Las quemaduras son un trauma directo sobre la piel muy otro tejido primario que puede
            ser causada por diferentes agentes como productos químicos, líquidos y sólidos calientes
            o aquellos agentes que producen llamas.
          </Text>
          
          <Text style={styles.contentText}>
            Se entiende por quemadura un conjunto de fenómenos locales y sistémicos que resultan de
            la acción de muy alta temperatura, electricidad o algunos agentes químicos, así como por
            agentes fríos.
          </Text>

          <Text style={styles.contentText}>
            Las quemaduras se pueden producir en cualquier lugar del organismo, pero son mucho más
            frecuentes en la piel pudiendo incluir los tejidos adyacentes, ocasionando un
            desequilibrio bioquímico por desnaturalización proteica, edema y pérdida del volumen del
            líquido intravascular, debido a un aumento de permeabilidad.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
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
});

export default Definition;
