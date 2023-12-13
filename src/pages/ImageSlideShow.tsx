import Box from "@mui/material/Box";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSlideShow } from "../context/SlideShowContext";
import { ScreenResolution, useResolution } from "../context/ResponsiveContext";

const ImageSlideShow = () => {
    const { slideShowImage, startIndex } = useSlideShow();
    const { screenResolution } = useResolution();
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "0px 5px", md: "0px", lg: "0px" },
                }}
            >
                <ImageGallery
                    showBullets={false}
                    showThumbnails={false}
                    showNav={screenResolution === ScreenResolution.xs ? false : true}
                    items={slideShowImage}
                    startIndex={startIndex}
                />
            </Box>
        </>
    );
};

export default ImageSlideShow;
