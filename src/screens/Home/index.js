import React, { useContext } from "react";
// import Post from "../../screens/Home/deneme"
import Post from "../../components/post/index";
import { userDetailsContext } from "../../contexts/UserDetailsProvider";
import {

  View,
  FlatList,
  Dimensions
 
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import Navigation from "../../components/navigation/navigation";

const Home = () => {
  const [postDetail, setPostDetail] = useContext(userDetailsContext);
  const renderItem = ({ item }) => <Post post={item} />;
  return (
    // <Post post={postDetail[0]} />
    <View>
      <View>
        <FlatList
          data={postDetail}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToInterval={Dimensions.get("window").height-Dimensions.get("window").height*(6/100)}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
        />
      </View>
      <View>
        <Navigation />
      </View>
    </View>
  );
};

export default Home;
