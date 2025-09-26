import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../services/events";
import EventListItem from "../components/EventListItem";


export default function Home() {
 const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents
  })


  if (isLoading) {
    return <ActivityIndicator />
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
          />
      </View>
  )
}