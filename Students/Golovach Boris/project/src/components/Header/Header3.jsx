import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar';

import PushToggle from '../PushToggle/index.jsx';
//
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
//import MoreIcon from '@material-ui/icons/MoreVert';
//

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    }

    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div className="header">
                <PushToggle />
                <AppBar                         
                    title= {"ChatRoom " + this.props.chatId }
                    // background-color= "rebeccapurple"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                    <IconButton aria-label="show 17 new notifications" color="inherit" >
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon color="white" />
                        </Badge>
                    </IconButton>
                </AppBar>
            </div>
        )
    }
}