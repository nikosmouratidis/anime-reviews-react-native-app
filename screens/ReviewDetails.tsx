import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { RootStackParamList } from "../@types"
import Card from "../components/Card"

const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  } as Record<number, any>,
}

type ReviewDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "ReviewDetails"
>

const ReviewDetails: FC<ReviewDetailsProps> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.titleText}>{route.params.title}</Text>
        <Text style={styles.text}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={styles.text}>Anime rating: </Text>
          <Image source={images.ratings[route.params.rating]} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})

export default ReviewDetails
