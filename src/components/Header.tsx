import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RouterPath } from "../router/RouterPath";
import { useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Headroom from "react-headroom";
import { Images } from "../asset";
import "../css/Header.css";
import Drawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const HeaderList = [
  { name: "Automotive", url: RouterPath.automotive },
  { name: "Landscape", url: RouterPath.landscape },
  { name: "Events", url: RouterPath.events },
  { name: "Store", url: RouterPath.automotive, isInActive: true },
];

interface HeaderItemProps {
  data: { name: string; url: string; isInActive?: boolean };
  handleClick?: () => void;
}

const HeaderItem = ({ data, handleClick }: HeaderItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = useCallback(() => {
    handleClick?.();
    navigate(data.url);
  }, [data.url, handleClick, navigate]);

  const activeTab = useMemo(() => {
    return location.pathname;
  }, [location]);

  return (
    <>
      {data?.isInActive ? (
        <Typography className={"in-active pr-40"}>{data.name}</Typography>
      ) : (
        <Typography
          sx={{ cursor: "pointer" }}
          className={`${data.url === activeTab ? "active" : "in-active"} pr-40`}
          onClick={onClick}
        >
          {data.name}
        </Typography>
      )}
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <Headroom>
      <Box
        className="d-flex justify-content-end align-items-center"
        sx={{
          height: "80px",
          borderBottom: "1px solid #BEBCBD",
          backgroundColor: "#99e0a4",
        }}
      >
        <Grid container spacing={0} className="d-flex align-items-center">
          <Grid item xs={6}>
            <Box className="d-flex align-items-center logo-padding">
              <img
                style={{ width: "190px" }}
                src={Images.logo}
                alt="studiobee"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="d-flex justify-content-end align-items-center">
              <Box className="mobile-hide">
                <Box className="align-center">
                  {HeaderList.map((item) => (
                    <HeaderItem key={item.name} data={item} />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="desktop-hide">
              <Box className="menu-align">
                <IconButton
                  aria-label="menu"
                  size="large"
                  onClick={toggleDrawer}
                >
                  <MenuIcon className="menu-icon" />
                </IconButton>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  anchor="right"
                >
                  <Box className="drawer-styles">
                    {HeaderList.map((item) => (
                      <HeaderItem key={item.name} data={item} handleClick={toggleDrawer} />
                    ))}
                  </Box>

                </Drawer>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Headroom>
  );
};

export default Header;
