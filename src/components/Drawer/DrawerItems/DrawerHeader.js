import React from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, Title, Caption, Paragraph } from "react-native-paper";
const DrawerHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopContainer}>
        <Avatar.Image
          source={{
            uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
          }}
          size={60}
        />
        <View style={styles.textContainer}>
          <Title style={styles.title}>John Doe</Title>
          <Caption style={styles.caption}>@foodie_doe</Caption>
        </View>
      </View>

      <View style={styles.headerBottomContainer}>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
          <Caption style={styles.caption}>Following</Caption>
        </View>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
          <Caption style={styles.caption}>Followers</Caption>
        </View>
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    //   borderWidth: 1,
    paddingLeft: 10,
  },
  headerTopContainer: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    //  paddingLeft: 20,
  },
  textContainer: {
    marginLeft: 15,
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 15,
    lineHeight: 15,
  },

  headerBottomContainer: {
    // marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
});
