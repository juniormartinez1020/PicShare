import { Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function Home() {
  return (
      <View
      className="flex-1 justify-center items-center
      bg-neutral-700"
      >
          <Text
          className="text-2xl font-bold text-green-300"
          >
            Home
        </Text>
        <Entypo name="plus" size={30} color="whitesmoke" />
      </View>
  )
}