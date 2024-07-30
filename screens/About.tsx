import React from "react"
import { StyleSheet, View, Text } from "react-native"

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>About Anime Reviews App</Text>
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
})

export default About
