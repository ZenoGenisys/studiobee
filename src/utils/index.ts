import { DataProps, SlideShowProps } from "../interface";


export const mapToSlideShowImages = (data: DataProps[], selectedIndex: number): { imageList: SlideShowProps[], index: number } => {
    const result: SlideShowProps[] = [];
    let count: number = selectedIndex;
    data.forEach((item, index) => {
        if (!item.isVideo) {
            result.push({
                url: item?.image,
                title: "Studiobee"
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