import { useAuth } from "@/providers/AuthProvider";
import { createEvent } from "@/services/events";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function CreateEvent() {

    const [name, setName] = useState('')

    const { user } = useAuth()

    const queryClient = useQueryClient()

    const createEventMutate = useMutation({
        mutationFn: () => createEvent({ name, owner_id: user?.id },
            user!.id
        ),
        onSuccess: (data) => {
            setName('')
            queryClient.invalidateQueries({
                queryKey: ['events']
            })
            router.replace(`/events/${data.id}`)
        }
    })

    return (
        <View className="flex-1 p-4 gap-4">
            <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Events name"
            className="bg-neutral-800 p-5 rounded-lg"
            placeholderTextColor='gray'
            />

            <Button
            title="create events"
            onPress={() => createEventMutate.mutate()}
            />
        </View>
    )
}