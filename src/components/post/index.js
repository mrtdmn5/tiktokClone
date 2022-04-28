import React, { useContext, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video, AVPlaybackStatus } from "expo-av";
import { useState } from "react";
import {
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import styles from "./style";
import { userDetailsContext } from "../../contexts/UserDetailsProvider";

const Post = (props) => {
  const [play, setPlay] = useState(true);
  const [likedPost, setLikedPost] = useState(false);
  const [post, setPost] = useState(props.post);
  const navigation = useNavigation();
  const onPlayplayPress = () => {
    setPlay(!play);
  };
  const onLike = () => {
    likedPost ? post.likes-- : post.likes++;
    setLikedPost(!likedPost);
  
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onLongPress={onLike} onPress={onPlayplayPress}>
        {/* Videoo !! */}

        <Video
          source={{
            uri: post.uri,
          }}
          style={styles.video}
          isLooping={true}
          shouldPlay={play}
          onError={(e) => console.log("video: ",e)}
          resizeMode={"cover"}
        />
      </TouchableWithoutFeedback>

      {/* Stop Button !! */}
      <View style={{ width: 50, height: 50, marginTop: 0 }}>
        <AntDesign
          name="caretright"
          size={50}
          color="#ffffff90"
          style={{ display: play ? "none" : "flex", ...styles.playButton }}
        />
      </View>

      {/* Right and Bottom Elements !! */}

      <View style={styles.elements}>
        {/* Right  Elements !! */}
        <View style={styles.rightElements}>
          <View>
            <Image
              source={{
                uri: post.user.imageUri,
              }}
              style={[styles.profilImage]}
            />

            <View style={[styles.followButton]}>
              <Badge
                value={
                  <Text style={{ color: "white", fontWeight: "bold" }}>+</Text>
                }
                status="error"
              />
            </View>
          </View>

          <TouchableOpacity onPress={onLike}>
            <AntDesign
              name="heart"
              style={{ color: likedPost ? "red" : "white", ...styles.right }}
              size={40}
              color="white"
            />
            <Text style={styles.rightElementCounter}>{post.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Navi");
            }}
          >
            <FontAwesome
              name="commenting"
              style={styles.right}
              size={40}
              color="white"
            />
            <Text style={styles.rightElementCounter}>{post.comments}</Text>
          </TouchableOpacity>
          <View>
            <Feather
              name="share-2"
              style={styles.right}
              size={40}
              color="white"
            />
            <Text style={styles.rightElementCounter}>{post.shares}</Text>
          </View>
        </View>

        {/* Bottom Elements !! */}
        <View style={styles.bottomElements}>
          <Text style={{ fontWeight: "bold", ...styles.bottomTexts }}>@{post.user.username}  </Text>

          <Text style={styles.bottomTexts}>{post.despcrition}</Text>

          <View style={[styles.bottomTexts, styles.musicInfo]}>
            <Foundation
              style={styles.musicIcon}
              name="music"
              size={20}
              color="white"
            />
            <Text style={styles.bottomTexts}> {post.song}</Text>
            <MaterialCommunityIcons
              style={styles.musicPlayerIcon}
              name="music-circle-outline"
              size={46}
              color="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
