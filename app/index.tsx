import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/custom-button";
import { StatusBar } from "expo-status-bar";

export default function Onboard() {
  return (
    <SafeAreaView className="bg-dark h-full">
      <ScrollView className="h-full">
        <View className=" h-full flex items-center justify-center p-3 mt-5">
          {/** logo */}
          <Image
            resizeMode="contain"
            source={require("../assets/images/logo.png")}
            alt="logo"
          />

          {/** image  */}
          <Image
            className="mt-5"
            resizeMode="contain"
            source={require("../assets/images/onboard.png")}
            alt="logo"
          />

          {/** title */}
          <View className="flex flex-row items-center mt-4 text-center justify-center  ">
            <Text className="font-semibold text-[30px] text-[#fff] text-center">
              Discover Endless Possibilities with {""}
              <Text className="text-primary font-extrabold text-[30px]">
                Tora
              </Text>
            </Text>
          </View>

          {/** subtitle */}
          <Text className="text-secondary  mt-1 p-3 text-[14px]">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Tora
          </Text>

          {/** button */}
          <CustomButton
            style={{ marginTop: 20 }}
            title="Continue with Email"
            onClick={() => console.log("clicked")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="" style="dark" />
    </SafeAreaView>
  );
}
