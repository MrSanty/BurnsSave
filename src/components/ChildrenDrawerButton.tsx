import { FC } from "react";
import { RouteDrawer } from "src/types/routes";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface Props {
  childrens: RouteDrawer[],
  isActive: boolean,
  route: RouteDrawer,
  onItemPress: (route: RouteDrawer) => void
}

const ChildrenDrawerButton: FC<Props> = ({ childrens, isActive, route, onItemPress }) => {
  const isLastItem = route.title === childrens[ childrens.length - 1 ].title
  const textColor = !isActive ? "#2E2F32" : isActive ? "#FB0263" : "white"

  return (
    <TouchableWithoutFeedback
      style={styles.buttonContainer}
      onPress={() => onItemPress(route)}
    >
      <View
        style={{
          ...styles.button,
          borderBottomWidth: isLastItem ? 0.5 : 0,
          borderBottomColor: isLastItem ? "white" : "transparent",
          borderTopColor: "#FFC402",
          borderTopWidth: 1,
          minWidth: "100%",
          paddingLeft: 20,
        }}
      >
        <Text
          style={{
            ...styles.textButton,
            fontFamily: isActive ? 'Poppins-Bold' : "Poppins-SemiBold",
            color: textColor,
          }}
        >
          {route.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%"
  },
  button: {
    paddingVertical: 10,
    width: "100%"
  },
  textButton: {
    color: 'white',
    fontSize: 13,
    marginLeft: 10
  }
})

export default ChildrenDrawerButton;