import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { mapToSlideShowImages } from "../utils";
import { useProvider } from ".";
import { SlideShowProps } from "../interface";

interface ProviderType {
    slideShowImage: SlideShowProps[];
    setSlideShowImage: Dispatch<SlideShowProps[]>;
    startIndex: number;
    setStartIndex: Dispatch<number>;
    isSlideShow: boolean;
    setIsSlideShow: Dispatch<boolean>;
}

interface SlideShowContextType {
    children: ReactNode;
}

const SlideShowContext = createContext({
    slideShowImage: [],
    setSlideShowImage: () => [],
    startIndex: 0,
    setStartIndex: () => 1,
    isSlideShow: true,
    setIsSlideShow: () => false
} as ProviderType);

export const SlideShow = ({ children }: SlideShowContextType) => {
    const { automotive } = useProvider();
    const [slideShowImage, setSlideShowImage] = useState<SlideShowProps[]>(
        []
    );
    const [startIndex, setStartIndex] = useState<number>(0);
    const [isSlideShow, setIsSlideShow] = useState<boolean>(false);

    useEffect(() => {
        const data = mapToSlideShowImages(automotive ?? [], 0);
        setSlideShowImage(data?.imageList);
    }, [automotive]);

    useEffect(() => {
        if (isSlideShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isSlideShow]);

    const value = useMemo(() => {
        return {
            slideShowImage,
            setSlideShowImage,
            startIndex,
            setStartIndex,
            isSlideShow,
            setIsSlideShow
        };
    }, [isSlideShow, slideShowImage, startIndex]);

    return (
        <SlideShowContext.Provider value={value}>
            {children}
        </SlideShowContext.Provider>
    );
};

export const useSlideShow = () => {
    return useContext(SlideShowContext);
};
