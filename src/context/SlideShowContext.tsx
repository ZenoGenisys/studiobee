import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import { mapToSlideShowImages } from "../utils";
import { useProvider } from ".";

interface ProviderType {
    slideShowImage: ReactImageGalleryItem[];
    setSlideShowImage: Dispatch<ReactImageGalleryItem[]>;
    startIndex: number;
    setStartIndex: Dispatch<number>;
}

interface SlideShowContextType {
    children: ReactNode;
}

const SlideShowContext = createContext({
    slideShowImage: [],
    setSlideShowImage: () => [],
    startIndex: 0,
    setStartIndex: () => 1,
} as ProviderType);

export const SlideShow = ({ children }: SlideShowContextType) => {
    const { automotive } = useProvider();
    const [slideShowImage, setSlideShowImage] = useState<ReactImageGalleryItem[]>(
        []
    );
    const [startIndex, setStartIndex] = useState<number>(0);

    useEffect(() => {
        const data = mapToSlideShowImages(automotive ?? [], 0);
        setSlideShowImage(data?.imageList);
    }, [automotive]);

    const value = useMemo(() => {
        return {
            slideShowImage,
            setSlideShowImage,
            startIndex,
            setStartIndex,
        };
    }, [slideShowImage, startIndex]);

    return (
        <SlideShowContext.Provider value={value}>
            {children}
        </SlideShowContext.Provider>
    );
};

export const useSlideShow = () => {
    return useContext(SlideShowContext);
};
