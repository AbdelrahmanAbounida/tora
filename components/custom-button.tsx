import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

export interface CustomButtonProps {
  title: string;
  onClick: any;
  style: StyleProp<ViewStyle>;
}

export default function CustomButton({
  title,
  onClick,
  style,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={style}
      onPress={onClick}
      className={`bg-primary rounded-lg w-full flex items-center justify-center  mx-auto `}
    >
      <Text className="font-bold py-5 ">{title}</Text>
    </TouchableOpacity>
  );
}
