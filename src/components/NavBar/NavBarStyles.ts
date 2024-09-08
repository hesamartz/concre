export const NavBarStyles = {
    container: {
        flexGrow: 1,
    },
    bar: {
        display: 'flex',
        background: "darkslategrey",
    },
    applicationIcon: {
        padding: '4px',
        border: '1px solid #ceece2',
        borderRadius: '50%',
        mr: 1,
        color: "darkslategrey",
        backgroundColor: "white",
        fontSize: '2.2em',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,.2))'
    },
    title: {
        flexGrow: 1,
        padding: '4px',
        fontSize: '1.4em',
        letterSpacing: '0px',
        fontWeight: 600,
        mt: 4,
        textTransform: 'uppercase',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,.8))'
    },
    paperprops: {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                borderRadius: 4
            },
            '&::before': {
                content: '*',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 10,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
    },
    userIcon: {
        padding: '2px',
        border: '1px solid #ceece2',
        borderRadius: '50%',
        mr: 1,
        color: "darkslategrey",
        backgroundColor: "white",
        fontSize: '1.4em',
        //filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,.2))'
    },
    userInformation: {
        position: 'absolute',
        right: '-260%',
        alignItems: 'center',
    },
    drawerStyles: {
        background: "linear-gradient(30deg, #f2f2f2 0%, #FFF 100%)",
        color: "#242424",
        fontWeight: 800,
    },
    menuIcon: {
        background: "linear-gradient(30deg, #f2f2f2 0%, #FFF 100%)",
        color: "#242424",
        fontWeight: 800,
    }
};
