import { Grid } from "@mui/material";
import { useProvider } from "../context";
import ImageComponent from "../components/ImageComponent";
import { useCallback } from "react";
import { useSlideShow } from "../context/SlideShowContext";
import { mapToSlideShowImages } from "../utils";

const Automotive = () => {
    const { automotive } = useProvider();
    const { setSlideShowImage, setStartIndex, setIsSlideShow } = useSlideShow();

    const handleSlideShow = useCallback(
        (index: number) => {
            const result = mapToSlideShowImages(automotive ?? [], index)
            setSlideShowImage(result?.imageList);
            setStartIndex(result?.index);
            setIsSlideShow(true);
        },
        [automotive, setIsSlideShow, setSlideShowImage, setStartIndex]
    );

    return (
        <Grid container spacing={0} className="d-flex">
            <Grid item xs={0.5} lg={1} md={1}></Grid>
            <Grid item xs={11} lg={10} md={10}>
                <ImageComponent
                    data={automotive ?? []}
                    isMobileFullScreen={true}
                    handleSlideShow={handleSlideShow}
                />
            </Grid>
            <Grid item xs={0.5} lg={1} md={1}></Grid>
        </Grid>
    );
};

export default Automotive;
