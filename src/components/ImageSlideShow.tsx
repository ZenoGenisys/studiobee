import { useCallback, useEffect } from "react";
import { useSlideShow } from "../context/SlideShowContext";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useLocation } from "react-router-dom";

const ImageSlideShow = () => {
    const location = useLocation();
    const { slideShowImage, startIndex, isSlideShow, setIsSlideShow } =
        useSlideShow();

    const onClose = useCallback(() => {
        setIsSlideShow(false);
    }, [setIsSlideShow]);

    useEffect(() => {
        if (location.pathname) {
            setIsSlideShow(false);
        }
    }, [location.pathname, setIsSlideShow]);

    return (
        <>
            {isSlideShow && (
                <Lightbox
                    images={slideShowImage}
                    startIndex={startIndex}
                    onClose={onClose}
                />
            )}
        </>
    );
};

export default ImageSlideShow;
