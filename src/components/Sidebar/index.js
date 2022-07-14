import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ShareIcon from '@material-ui/icons/Share';
import StreetviewIcon from '@material-ui/icons/Streetview';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import { PAGE_PATHS } from '../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,

  },
  drawerPaper: {
    width: '20%',
    height: '80%',
    marginTop: '80px',
    borderRadius: '1%',
    marginRight: '10%',
    backgroundColor: '#fff'
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("==> location; ", location)
  const listItemCommonStyle = { marginLeft: '20px', marginRight: '40px' };
  const listMenus = [
    { icon: <GroupIcon style={listItemCommonStyle} />, text: "Manage User", pathname: PAGE_PATHS.MANAGE_USERS },
    { icon: <CreditCardIcon style={listItemCommonStyle} />, text: "Manage Coupon", pathname: PAGE_PATHS.DISCOUNTS_AND_COUPONS },
    { icon: <ShareIcon style={listItemCommonStyle} />, text: "Manage Category", pathname: PAGE_PATHS.MANAGE_CATEGORY },
    { icon: <StreetviewIcon style={listItemCommonStyle} />, text: "Manage Location", pathname: PAGE_PATHS.MANAGE_LOCATION },
    { icon: <PermIdentityIcon style={listItemCommonStyle} />, text: "Manage Roles", pathname: PAGE_PATHS.MANAGE_ROLES },
    { icon: <ClassOutlinedIcon style={listItemCommonStyle} />, text: "Manage Products", pathname: PAGE_PATHS.MANAGE_PRODUCT },
    { icon: <MenuOutlinedIcon style={listItemCommonStyle} />, text: "Manage Brand", pathname: PAGE_PATHS.MANAGE_BRAND },
    { icon: <RoomOutlinedIcon style={listItemCommonStyle} />, text: "Geo Tagging", pathname: PAGE_PATHS.GEO_TAGGING },
    { icon: <VideogameAssetOutlinedIcon style={listItemCommonStyle} />, text: "Manage Contractor", pathname: PAGE_PATHS.MANAGE_CONTRACTOR },
  ];

  const handleMenuClick = (pathname) => {
    console.log("==> pathname: ", pathname)
    navigate(pathname || '');
  }

  return (
    <div>
      <CssBaseline />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper, }} className={classes.drawer}>
        <List>
          {listMenus.map((item, index) => (<ListItem button key={`${index}_${item.text}`} onClick={() => handleMenuClick(item.pathname)} style={{ background: location.pathname === item.pathname ? "#eee" : "none" }}>
            {item.icon}
            <ListItemText>{item.text}</ListItemText>
          </ListItem>))}
        </List>
      </Drawer>
    </div>
  );
}
export default Sidebar;