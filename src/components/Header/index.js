import React from 'react';
import { Badge, InputBase, IconButton, Toolbar, AppBar, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications'
import b from '../../images/b.png';
import './header.css';
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        justfyContent: 'space-between',
        padding: '5px  5px',
        alignItems: 'center',
        backgroundColor: '#FFFFFF ',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '28%',
            width: '40%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        color: '#494949',
        marginTop:'5px',
    },
    inputBase: {
        paddingLeft:'10px',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar className='header__appbar' position='fixed'>
                <Toolbar>
                    <div className="header_appbar_img">
                        <img src={b} className="header__logo" />
                        <div className="content">AC & APPLIANCES</div>
                    </div>
                    <div className={classes.search}>
                        <InputBase placeholder="Search…" className={classes.inputBase} />
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                    </div>
                    {/* item will be on the right side */}
                    <div className={classes.grow} />
                    {/* icons on the right side topbar */}
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge style={{ color: 'black' }}>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" style={{ color: 'black' }}>
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header