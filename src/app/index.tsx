import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getEventForUser, getEvents } from "../services/events";
import EventListItem from "../components/EventListItem";
import { Ionicons } from '@expo/vector-icons'
import { Link } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";


export default function Home() {
  
  const { user } = useAuth()

 const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEventForUser(user!.id)
  })


  if (isLoading) {
    return (
      <View
      className="flex-1 justify-center items-center"
      >
        <ActivityIndicator />
      </View>
    )
  }

  if (error) {
    return <Text>Error: {error.message} </Text>
  }

  return (
      <View
      className="flex-1 justify-center items-center
      bg-neutral-700 gap-4"
      >

          <FlatList
          data={data}
          contentContainerClassName="gap-4 p-4"
          renderItem={({ item }) => 
           <EventListItem event={item} />
            }
            contentInsetAdjustmentBehavior="automatic"
            ListHeaderComponent={() => (
              <Link href='/events/create' asChild>
                <Pressable className="bg-green-800 mt-10 p-4 rounded-lg
                items-center justify-center flex-row gap-2">
                  <Ionicons 
                  name='add-outline'
                  size={30}
                  color='whitesmoke'
                  />
                  <Text
                  className="text-slate-50 text-lg font-semibold"
                  >
                    create event
                  </Text>
                </Pressable>
              </Link>
            )}
          />
      </View>
  )
}