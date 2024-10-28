import { View, Text, Image } from "react-native";
import React from "react";

const ProfileCard = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#00697A",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 350,
          width: 300,
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flex: 2,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
            source={require("../images/profilePicture.webp")}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Aya Alsakkaf
          </Text>

          <Text>Kuwait City</Text>
        </View>

        <View
          style={{
            backgroundColor: "grey",
            width: "100%",
            height: 1,
          }}
        ></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "16" }}>80K </Text>
            <Text>Followers</Text>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "16" }}>80K </Text>
            <Text>Followers</Text>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "16" }}>80K </Text>
            <Text>Followers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
