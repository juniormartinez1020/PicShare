import { Text, View } from "react-native";
import { Tables } from "../types/database.types";


type Event = Tables<'events'>

type EventListItemProps = {
    event: Event
}

export default function EventListItem({ event }: EventListItemProps ) {
    return (
        <View
        className="bg-neutral-950 p-4 rounded-lg"
        >
            <Text
                className="text-slate-50 text-2xl font-bold"
            >
                {event.name}
            </Text>
        </View>
    )
}