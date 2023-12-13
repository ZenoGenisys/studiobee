import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { useCallback } from "react";
import { useProvider } from "../context";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../router/RouterPath";

const Events = () => {
  const { events } = useProvider();
  const navigate = useNavigate();

  const disableRightClick = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      event.preventDefault();
    },
    []
  );

  const handleClick = useCallback(
    (id: string) => {
      navigate(`${RouterPath.eventsDetails}/${id}`);
    },
    [navigate]
  );

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ lg: 3, md: 3, xs: 2 }}
          columns={{ xs: 12 }}
          className="d-flex align-items-center"
        >
          {(events ?? [])?.map((item, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sx={{ width: "100%", height: "auto" }}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                {item.image !== "" && (
                  <img
                    src={item.image}
                    style={{
                      maxWidth: "100%",
                      width: item?.width,
                      maxHeight: "100%",
                      height: item?.height,
                    }}
                    alt={item.alt}
                    draggable="false"
                    onContextMenu={disableRightClick}
                    onClick={() => handleClick(item?.detailsKey ?? "")}
                  />
                )}
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography
                    sx={{
                      padding: {
                        lg: "12px 16px",
                        md: "10px 10px",
                        xs: "5px 5px",
                      },
                      color: "#fff",
                      overflow: "hidden",
                      fontSize: { lg: "22px", md: "20px", xs: "12px" },
                      fontWeight: 600,
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Events;
