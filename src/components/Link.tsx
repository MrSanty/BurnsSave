import { Linking, Pressable, StyleSheet, Text } from "react-native"

interface Props {
  url: string;
  name: string;
  customStyle?: any;
}

export const LinkText = ({ url, name, customStyle }: Props) => {
  return (
    <Pressable
      onPress={() => Linking.openURL(url)}
    >
      {
        ({ pressed }) => (
          <Text
            style={[
              styles.listText,
              {
                color: pressed ? '#2E2F32' : '#FB0263'
              },
              customStyle
            ]}
          >
            {name}
          </Text>
        )
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  listText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#FB0263'
  }
})