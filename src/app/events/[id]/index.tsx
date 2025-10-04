import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../../services/events";
import { Ionicons } from '@expo/vector-icons'
import AssetItem from "@/components/AssetItem";
import { Link, Stack, useLocalSearchParams } from "expo-router";

export default function EventDetailing() {

    const { id } = useLocalSearchParams<{id: string}>()

    const { 
        data: event, 
        isLoading, 
        error,
        isRefetching,
        refetch 
    } = useQuery({
        queryKey: ['events', id],
        queryFn: () => getEvent(id)
    })

    if (isLoading) {
        return <ActivityIndicator />
    }

    if (error) {
        return <Text>Error: {error.message} </Text>
    }

    if (!event) {
        return <Text>event is not found</Text>
    }

    return (
        <View className="mt-52 flex-1">
            <Stack.Screen
             options={{ 
                title: event.name,
                headerRight: () => (
                    <Link href={`/events/${id}/share`} asChild>
                        <Ionicons
                            name='share-outline'
                            size={30}
                            color='whitesmoke'
                            className='mr-2 mt-2'
                        />
                    </Link>
                )
            }}
            />

            <FlatList
            data={event.assets}
            numColumns={2}
            contentContainerClassName="gap-1 p-4"
            columnWrapperClassName="gap-1"
            renderItem={({ item }) => <AssetItem asset={item} />}
            contentInsetAdjustmentBehavior="automatic"
            refreshing={isRefetching}
            onRefresh={refetch}
            />

            
          
          <Link href={`/events/${id}/camera`} asChild>
            <Pressable
            className="absolute bottom-20 right-4
            flex-row items-center justify-center bg-white p-6 rounded-full"
            >
              <Ionicons
              name="camera-outline"
              size={40}
              color="black"
              />  
            </Pressable>
         </Link>   
        </View>
    )
}