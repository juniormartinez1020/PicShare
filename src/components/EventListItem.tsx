import { Pressable, Text, View } from "react-native";
import { Tables } from "../types/database.types";
import { Link } from "expo-router";


type Event = Tables<'events'>

type EventListItemProps = {
    event: Event
}

export default function EventListItem({ event }: EventListItemProps ) {
    return (
        <Link href={`/events/${event.id}`} asChild>
            <Pressable
                className="bg-neutral-950 p-4 rounded-lg"
            >
                <Text
                    className="text-slate-50 text-2xl font-bold"
                >
                    {event.name}
                </Text>
            </Pressable>
        </Link>
    )
}