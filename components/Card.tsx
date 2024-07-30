import { FC, PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    marginHorizontal: 4,
    marginVertical: 6,
    borderColor: "black",
    borderWidth: 1,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
})

export default Card
