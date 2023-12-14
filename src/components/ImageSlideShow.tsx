import { useCallback } from "react";
import { useSlideShow } from "../context/SlideShowContext";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const ImageSlideShow = () => {
    const { slideShowImage, startIndex, isSlideShow, setIsSlideShow } = useSlideShow();

    const onClose = useCallback(() => {
        setIsSlideShow(false);
    }, [setIsSlideShow]);
    return (
        <>
            {isSlideShow && <Lightbox images={slideShowImage} startIndex={startIndex} onClose={onClose} />}
        </>
    );
};

export default ImageSlideShow;
