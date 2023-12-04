import Grid from "@mui/material/Grid";
import GridComponent from "../components/GridComponent";
import { useProvider } from "../context";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import PreviewComponent from "../components/PreviewComponent";
import { DataProps } from "../interface";
import { RouterPath } from "../router/RouterPath";

const EventsDetails = () => {
    const { eventsDetails, events } = useProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const eventsId = useMemo(() => {
        const id = location.pathname.split("/");
        if (id?.length === 3) {
            return id[2];
        }
    }, [location.pathname]);

    const eventsData = useMemo(() => {
        if (eventsDetails && eventsId) {
            return eventsDetails?.[eventsId] ?? [];
        }
        return [];
    }, [eventsDetails, eventsId]);

    useEffect(() => {
        if (eventsDetails && eventsId && eventsDetails?.[eventsId] === undefined) {
            navigate(RouterPath.events);
        }
    }, [eventsDetails, eventsId, navigate])

    const subtitle = useMemo(() => {
        if (events) {
            return (
                events.filter((item) => item?.detailsKey === eventsId)?.[0]?.subTitle ??
                ""
            );
        }
        return "";
    }, [events, eventsId]);

    const { next, prev } = useMemo(() => {
        if (events) {
            let next = undefined;
            let prev = undefined;
            events.forEach((item, index) => {
                if (item?.detailsKey === eventsId) {
                    if (index === 0) {
                        next = events[index + 1];
                    } else if (index === events?.length - 1) {
                        prev = events[index - 1];
                    }
                    next = events[index + 1];
                    prev = events[index - 1];
                }
            });
            return {
                next,
                prev,
            };
        }
        return {
            next: undefined,
            prev: undefined,
        };
    }, [events, eventsId]);

    const handleNext = useCallback(
        (data?: DataProps) => {
            navigate(`${RouterPath.eventsDetails}/${data?.detailsKey}`);
        },
        [navigate]
    );

    const handlePrev = useCallback(
        (data?: DataProps) => {
            navigate(`${RouterPath.eventsDetails}/${data?.detailsKey}`);
        },
        [navigate]
    );

    return (
        <>
            <Grid container spacing={0} className="d-flex">
                <Grid item xs={0.5} lg={1} md={1}></Grid>
                <Grid item xs={11} lg={10} md={10}>
                    <TitleComponent title={subtitle} />
                    <GridComponent data={eventsData} />
                    <PreviewComponent
                        next={next}
                        prev={prev}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </Grid>
                <Grid item xs={0.5} lg={1} md={1}></Grid>
            </Grid>
        </>
    );
};

export default EventsDetails;
