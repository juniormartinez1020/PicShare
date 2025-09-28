import { cloudinary } from "@/lib/cloudinary";
import { Tables } from "@/types/database.types";
import { AdvancedImage } from "cloudinary-react-native";
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { artisticFilter } from "@cloudinary/url-gen/actions/effect";

export default function AssetItem({ asset }: { asset: Tables<'assets'>}) {
    return (
        <AdvancedImage
                cldImg={cloudinary.image(asset.asset_id!).resize(thumbnail()
                .height(200).width(200)
            ).effect(artisticFilter('al_dente'))
        }
                width={200}
                height={200}
                className="flex-1 max-w-[50%] w-full aspect-[3/4] h-auto rounded-lg"
            /> 
    )
}