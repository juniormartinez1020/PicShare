import { AdvancedImage } from "cloudinary-react-native";
import { Text, View } from "react-native";
import { cloudinary } from "../lib/cloudinary";
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { artisticFilter } from "@cloudinary/transformation-builder-sdk/actions/effect";

export default function Event() {
    return (
        <View>
            <Text
                className="text-slate-50"
            >
                event camera
            </Text>

            <AdvancedImage
                cldImg={cloudinary.image('kb1uhutdix5hf5vubyow').resize(thumbnail()
                .height(200).width(200)
            ).effect(artisticFilter('incognito'))
        }
                width={200}
                height={200}
                className="w-full aspect-[3/4] h-auto"
            />
        </View>
    )
}