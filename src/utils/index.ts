import { ReactImageGalleryItem } from "react-image-gallery";
import { DataProps } from "../interface";

export const mapToSlideShowImages = (data: DataProps[], selectedIndex: number): { imageList: ReactImageGalleryItem[], index: number } => {
    const result: ReactImageGalleryItem[] = [];
    let count: number = selectedIndex;
    data.forEach((item, index) => {
        if (!item.isVideo) {
            result.push({
                original: item?.image,
                thumbnail: item?.image,
            });
        } else {
            if (selectedIndex > index) {
                count -= 1;
            }
        }
    });
    return {
        imageList: result,
        index: count
    };
}