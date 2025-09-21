import { View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";

export default function Home() {
  return (
      <View
      className="flex-1 justify-center items-center
      bg-neutral-700 gap-4"
      >
        <Link href='/camera'>
        Camera on 
        </Link>

        <Link href='/event'>
         Events detailing
        </Link>
      </View>
  )
}