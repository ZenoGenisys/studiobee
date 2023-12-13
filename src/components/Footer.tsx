import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Images } from "../asset";
import { useCallback } from "react";
import { ConfigData } from "../config";

const Footer = () => {

    const handleWhatsapp = useCallback(() => {
        window.open(ConfigData.whatsApp, "_blank")
    }, []);

    const handleUnsplash = useCallback(() => {
        window.open(ConfigData.unsplash, "_blank")
    }, []);

    const handleInstagram = useCallback(() => {
        window.open(ConfigData.instagram, "_blank")
    }, []);

    return (
        <Box
            sx={{
                marginTop: { lg: "150px", md: "50px", xs: "30px" },
                height: "196px",
                backgroundColor: "rgba(153, 224, 164, 0.73)",
            }}
        >
            <Grid container spacing={0} className="d-flex">
                <Grid item xs={0.5} lg={1} md={1}></Grid>
                <Grid item xs={11} lg={10} md={10}>
                    <Box
                        className="d-flex justify-content-between"
                        sx={{ padding: "30px 0px 48px 0px" }}
                    >
                        <Box>
                            <img
                                className="footer-width"
                                src={Images.footerLogo}
                                alt="studiobee"
                            />
                        </Box>
                        <Box className="d-flex align-items-center">
                            <img style={{ cursor: "pointer", width: "42px" }} src={Images.instagram} alt="instagram" onClick={handleInstagram} />
                            <img style={{ cursor: "pointer", width: "42px", margin: "0px 8px" }} src={Images.whatsapp} alt="whatsapp" onClick={handleWhatsapp} />
                            <img style={{ cursor: "pointer", width: "42px" }} src={Images.unsplash} alt="unsplash" onClick={handleUnsplash} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ color: "#fff", paddingBottom: "12px", fontWeight: 800 }}
                            className="d-flex justify-content-center footer-text"
                        >
                            Copyright ©2023 Studiobee. All rights reserved.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={0.5} lg={1} md={1}></Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
