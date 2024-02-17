import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface DrawerButtonProps {
  item: any,
  onItemPress: (item: any) => void,
  activeItems: any,
  isChildren?: boolean,
  isActive?: boolean,
  isParent?: boolean
}

const DrawerChildButton = ({ item, onItemPress, activeItems, isChildren, isActive }: DrawerButtonProps) => {
  const isLastItem = item.title === activeItems[ activeItems.length - 1 ].title
  const textColor = !isActive ? "#2E2F32" : isActive ? "#FB0263" : "white"

  return (
    <TouchableWithoutFeedback
      style={styles.buttonContainer}
      onPress={() => onItemPress(item)}
    >
      <View
        style={{
          ...styles.button,
          borderBottomWidth: isLastItem ? 0.5 : 0,
          borderBottomColor: isLastItem ? "white" : "transparent",
          borderTopColor: isChildren ? "#FFC402" : "white",
          borderTopWidth: isChildren ? 1 : 0.5,
          minWidth: "100%",
          paddingLeft: !isChildren ? 20 : 0,
        }}
      >
        <Text
          style={{
            ...styles.textButton,
            fontFamily: isChildren && !isActive ? "Poppins-SemiBold" : 'Poppins-Bold',
            color: isChildren ? textColor : "white",
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  button: {
    width: "100%",
    paddingVertical: 10,
  },
  textButton: {
    color: 'white',
    marginLeft: 30,
    fontSize: 13
  }
})

export default DrawerChildButton;