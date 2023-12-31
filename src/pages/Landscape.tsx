import GridComponent from "../components/GridComponent";
import Grid from "@mui/material/Grid";
import { useProvider } from "../context";
import { useCallback } from "react";
import { useSlideShow } from "../context/SlideShowContext";
import { mapToSlideShowImages } from "../utils";

const Landscape = () => {
    const { landscape } = useProvider();
    const { setSlideShowImage, setStartIndex, setIsSlideShow } = useSlideShow();

    const handleSlideShow = useCallback(
        (index: number) => {
            const result = mapToSlideShowImages(
                [
                    ...(landscape?.["rowOne"] ?? []),
                    ...(landscape?.["rowTwo"] ?? []),
                    ...(landscape?.["rowThree"] ?? []),
                ] ?? [],
                index
            );
            setSlideShowImage(result?.imageList);
            setStartIndex(result?.index);
            setIsSlideShow(true);
        },
        [landscape, setIsSlideShow, setSlideShowImage, setStartIndex]
    );

    return (
        <>
            <Grid container spacing={1} className="d-flex">
                <Grid item xs={1}></Grid>
                <Grid item xs={3.33}>
                    <GridComponent
                        data={landscape?.["rowOne"] ?? []}
                        handleSlideShow={handleSlideShow}
                    />
                </Grid>
                <Grid item xs={3.33}>
                    <GridComponent
                        data={landscape?.["rowTwo"] ?? []}
                        handleSlideShow={(index: number) => {
                            handleSlideShow(index + (landscape?.["rowOne"] ?? [])?.length);
                        }}
                    />
                </Grid>
                <Grid item xs={3.33}>
                    <GridComponent
                        data={landscape?.["rowThree"] ?? []}
                        handleSlideShow={(index: number) => {
                            handleSlideShow(
                                index +
                                (landscape?.["rowOne"] ?? [])?.length +
                                (landscape?.["rowTwo"] ?? [])?.length
                            );
                        }}
                    />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    );
};

export default Landscape;
