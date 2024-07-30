import { FC, useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import FlatButton from "./Button"

type ReviewFormProps = {
  addReview: (review: { title: string; body: string; rating: string }) => void
}

const ReviewForm: FC<ReviewFormProps> = ({ addReview }) => {
  const [review, setReview] = useState({
    title: "",
    body: "",
    rating: "",
  })

  const submitHandler = () => {}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Review title"
        onChangeText={(e) =>
          setReview((prev) => ({
            ...prev,
            title: e,
          }))
        }
        // onBlur={}
        value={review.title}
      />
      <TextInput
        style={styles.input}
        multiline
        // minHeight={60}
        placeholder="Review details"
        onChangeText={(e) =>
          setReview((prev) => ({
            ...prev,
            body: e,
          }))
        }
        value={review.body}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating (1 - 5)"
        onChangeText={(e) =>
          setReview((prev) => ({
            ...prev,
            rating: e,
          }))
        }
        // onBlur={}
        value={review.rating}
        keyboardType="numeric"
      />
      <FlatButton onPress={() => addReview(review)} text="submit" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
})

export default ReviewForm
