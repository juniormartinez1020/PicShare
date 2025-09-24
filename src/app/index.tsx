import { View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {

  useEffect(() => {
    supabase.from('events').select('*, assets(*)')
    .then((data) => console.log(JSON.stringify(data, null, 2)))
  }, [])
  

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