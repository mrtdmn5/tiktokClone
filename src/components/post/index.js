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
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";

const Post = (props) => {
  const [play, setPlay] = useState(true);
  const [likedPost, setLikedPost] = useState(false);
  const [post, setPost] = useState(props.post);
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  const onPlayplayPress = () => {
    setPlay(!play);
  };
  const onLike = () => {
    likedPost ? post.likes-- : post.likes++;
    setLikedPost(!likedPost);
    
  };

  async function fetchUser() {
      
  

    const userData = await API.graphql(graphqlOperation(getUser,{id: post.userID}));
      
    setUser(...userData);
 
      console.log("user donduuuuuuuuuuuuuuu==",user)
      return userData.data.getUser;


 

  //  console.log("bbb=",userData.data.getUser)
  }
  async function getUserDetail(){
      const data =await fetchUser();
      console.log("sayfa yukledı==",data)
    }
  
  useEffect(() => {

    getUserDetail();
   
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onLongPress={onLike} onPress={onPlayplayPress}>
        {/* Videoo !! */}

        <Video
          source={{
            uri: post.videoUri,
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
                uri:  "https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
                
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
          <Text style={{ fontWeight: "bold", ...styles.bottomTexts }}>@{user} </Text>

          <Text style={styles.bottomTexts}>{post.description}</Text>

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
