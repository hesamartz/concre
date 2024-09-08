import * as React from 'react';
import { useNavigate } from "react-router-dom";

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Layers from '@mui/icons-material/Layers'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Home from '@mui/icons-material/Home'
import MarkChatUnreadOutlined from '@mui/icons-material/MarkChatUnreadOutlined'
import Group from '@mui/icons-material/Group'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { Avatar, Stack } from '@mui/material';

import { NavBarListItems } from './NavBarListItems';
import { NavBarDefaultListItems } from './NavBarDefaultListItems';
import { NavBarStyles } from './NavBarStyles';

const drawerWidth = 240;
const navBarListItems = NavBarListItems;
const navBarDefaultListItems = NavBarDefaultListItems;
const styles = NavBarStyles;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuopen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const handleItemClick = (path: string) => () => {
        console.log(path);
        navigate(path);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={2}>
            <Avatar style={styles.menuIcon}>
                <AssuredWorkloadIcon />
            </Avatar>
            <Typography variant="h6" noWrap component="div">
                Reservación de lugares
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{color: '#ff0000'}}>
            {theme.direction === 'rtl' ? <MenuOpenIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={styles.drawerStyles}>
            {navBarListItems.map(item => (
                <Tooltip title={item.title} key={item.index} placement="right">
                    <ListItem key={item.index} disablePadding>
                        <ListItemButton onClick={handleItemClick(item.path != null ? item.path : "/")}>
                            <ListItemIcon>
                                {item.icon === "Home" ? <Home /> :
                                    item.icon === "MarkChatUnreadOutlined" ? <MarkChatUnreadOutlined /> :
                                        item.icon === "Group" ? <Group /> :
                                            <Layers />
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                </Tooltip>
            ))}
        </List>
        <Divider />
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={menuopen}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <List>
                {navBarDefaultListItems.map(defaultitem => (
                    defaultitem.options?.map(option => (
                        <Tooltip title={option.title} key={option.index} placement="right">
                            <ListItem key={option.index} disablePadding>
                                <ListItemButton
                                    onClick={handleClick}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <ListItemIcon>
                                        {option.icon === "AccountCircle" ? <AccountCircle /> :
                                            option.icon === "Logout" ? <Logout /> :
                                                <Layers />
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={option.title} aria-hidden="true" />
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                    ))
                ))}
            </List>
        </Menu>
      </Drawer>
    </Box>
  );
}

export {NavBar}