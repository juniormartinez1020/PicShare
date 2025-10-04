import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import QRCode from 'react-native-qrcode-svg'

export default function Share() {

    const { id } = useLocalSearchParams<{id: string}>()

    return (
        <View
        className="flex-1 p-4 gap-4 items-center"
        >
            <Text
            className="text-slate-50 text-2xl font-bold"
            >
             Sharing event with our friends
            </Text>
            
            <QRCode
            value={`picshare://events/${id}/join`}
            size={200}
            />
            
            
        </View>
    )
}