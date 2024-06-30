import { View, Text, Button, Touchable, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_USER_POSTS } from "@/graphql/queries";
import { useNavigation, useRouter } from "expo-router";

export default function Profile() {
  const { loading, error, data: userPosts, refetch } = useQuery(GET_ALL_USERS); //useQuery(GET_USER_POSTS, { variables: { userId: 2 } });
  // const navigation = useNavigation();
  const router = useRouter();

  function useNoArgs(fn: any) {
    return useCallback(() => fn(), [fn]);
  }
  const doRefetch = useNoArgs(refetch);
  console.log({ userPosts, loading, error });
  return (
    <SafeAreaView className="bg-dark h-full">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Text className="text-primary font-bold text-xl">Profile</Text> */}

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          /* userPosts */
          userPosts?.map((post: any) => (
            <Text key={post?.id}>{post?.title}</Text>
          ))
        )}

        {/** button ro reload fetch */}
        {/* <Button title="Reload" onPress={refetch} /> */}
        <TouchableOpacity
          className="text-white bg-orange-500 p-3 rounded-md "
          onPress={() => router.replace("/profile")}
        >
          <Text className="text-white">Reload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
