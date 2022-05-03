import React, { useContext, useEffect, useState } from "react";
// import Post from "../../screens/Home/deneme"
import Post from "../../components/post/index";
import { userDetailsContext } from "../../contexts/UserDetailsProvider";
import { View, FlatList, Dimensions } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";
import { getUser } from "../../graphql/queries";

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [postDetail, setPostDetail] = useState();

  async function fetchPost() {
    const postData = await API.graphql(graphqlOperation(listPosts));
      setPostDetail(postData.data.listPosts.items);
   

 
  }

  
  useEffect(() => {

    console.log("basladı..")

   fetchPost();
    
      
   
  }, []);

  // const [postDetail, setPostDetail] = useContext(userDetailsContext);
//  async function  getUserName(item){
//   console.log("itemmgeldi==",item)
//     const data= await fetchUser(item.userID);
//     console.log("donen user bilgileri==",data)
//     return data;
//   }

  const renderItem = ({ item }) =><Post post={item}/>;
  
 // user={getUserName(item)}
  return (
    // <Post post={postDetail[0]} />
    <View>
      <View>
        <FlatList
          data={postDetail}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToInterval={
            Dimensions.get("window").height -
            Dimensions.get("window").height * (6 / 100)
          }
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        />
      </View>
    </View>
  );
};

export default Home;
