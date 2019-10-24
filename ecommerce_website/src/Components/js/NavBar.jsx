import React from 'react';
import "../css/NavBar.css"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from '../js/HomePage/HomePage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigation-bar">
      <Router>
        <AppBar position="static">
          <Tabs
            className="nav-items"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab className="no-hover" label="LOGO" />
            <Tab label="Home" component={Link} to="/"/>
            <Tab label="Cart" component={Link} to={"/cart"} />
            <Tab label="Profile" component={Link} to={"/profile"} />
            <Tab label="Seller Dashboard" component={Link} to={"/seller-dashboard"} />
            <Tab label="About" component={Link} to={"/about"} />
          </Tabs>
        </AppBar>
      </Router>
    </div>
  );
}