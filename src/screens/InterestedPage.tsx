import { FC } from "react";
import { Image, ImageBackground, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const InterestedPage: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 11);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Páginas de interés</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.listContainer}>
            <Image
              source={require('src/assets/icons/item.png')}
              style={styles.itemIcon}
            />
            <Pressable
              onPress={() => Linking.openURL('https://www.who.int/news-room/fact-sheets/detail/burns')}
            >
              {
                ({pressed}) => (
                  <Text
                    style={[
                      styles.listText,
                      {
                        color: pressed ? '#FB0263' : '#2E2F32'
                      }
                    ]}
                  >
                    https://www.who.int/news-room/fact-sheets/detail/burns.
                  </Text>
                )
              }
            </Pressable>
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
    color: '#FB0263'
  },
  itemIcon: {
    width: 10,
    height: 10
  }
})

export default InterestedPage;
