import { View } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../providers/AuthProvider";


export default function Home() {


  const { isAuthenticated, user } = useAuth()

  console.log(isAuthenticated, user)

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