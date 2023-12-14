import { BrowserRouter, Routes, Route } from "react-router-dom";
import Automotive from "../pages/Automotive";
import { RouterPath } from "./RouterPath";
import Header from "../components/Header";
import Landscape from "../pages/Landscape";
import Events from "../pages/Events";
import EventsDetails from "../pages/EventsDetails";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface HeaderFooterProps {
    children: ReactNode;
}

const HeaderFooter = ({ children }: HeaderFooterProps) => {
    return (
        <>
            <Header />
            <Box sx={{ marginTop: { lg: "50px", md: "50px", xs: "30px" } }}>
                {children}
            </Box>
            <Footer />
        </>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={RouterPath.automotive}
                    element={
                        <HeaderFooter>
                            <Automotive />
                        </HeaderFooter>
                    }
                />
                <Route
                    path={RouterPath.landscape}
                    element={
                        <HeaderFooter>
                            <Landscape />
                        </HeaderFooter>
                    }
                />
                <Route
                    path={RouterPath.events}
                    element={
                        <HeaderFooter>
                            <Events />
                        </HeaderFooter>
                    }
                />
                <Route
                    path={`${RouterPath.eventsDetails}/:id`}
                    element={
                        <HeaderFooter>
                            <EventsDetails />
                        </HeaderFooter>
                    }
                />
            </Routes>
        </BrowserRouter >
    );
};

export default Router;
