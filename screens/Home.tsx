import { FC, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
} from "react-native"
import { Review, DrawerParamList, RootStackParamList } from "../@types"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import Card from "../components/Card"
import { Ionicons } from "@expo/vector-icons"
import ReviewForm from "../components/ReviewForm"

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Drawer"> &
    DrawerNavigationProp<DrawerParamList, "Home">
}

const Home: FC<Props> = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([
    {
      title: "One Piece, best of all",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Naruto Shippuden, best ninja anime",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Bleach, best shinigami anime",
      rating: 4,
      body: "lorem ipsum",
      key: "3",
    },
  ])

  const pressHandler = (review: Review) => {
    navigation.navigate("ReviewDetails", review)
  }

  const addReview = (review: {
    title: string
    body: string
    rating: string
  }) => {
    setReviews((prev) => [
      {
        title: review.title,
        rating: parseInt(review.rating, 10),
        body: review.body,
        key: Math.random().toString(),
      } as Review,
      ...prev,
    ])
    setModalOpen(false)
  }

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <Ionicons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <Ionicons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Card>
            <Pressable
              style={({ pressed }) => pressed && [styles.pressed]}
              onPress={() => pressHandler(item)}
            >
              <Text style={styles.titleText}>{item.title}</Text>
            </Pressable>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: "#B52B40",
    color: "white",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    overflow: "hidden",
  },
  modalClose: {
    marginTop: 60,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#FBD8B0",
  },
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "#333",
  },
  pressed: {
    opacity: 0.55,
  },
})

export default Home
