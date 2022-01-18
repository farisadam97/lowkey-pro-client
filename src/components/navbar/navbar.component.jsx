import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const pages = [
  {name: "Home", route: "/"}, 
  {name: "Game List", route: "/game-list"}, 
  {name: "Top Score", route: "/top-score"}, 
  {name: "About Us", route: "/about"}, 
];
/* const pages = [
  {name: "Home", route: "/"}, 
  {name: "Game List", route: "/game-list"}, 
  {name: "Feature", route: "/feature"}, 
  {name: "System Requirement", route: "/system-requirement"},
  {name: "Top Score", route: "/top-score"}, 
  {name: "News Latter", route: "/news-latter"}, 
]; */

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navbarStyle = {
    background: "black",
    opacity: 0.8
  }
  return (
    <AppBar position="static" style={navbarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">

                    <Link
                    style={{  textDecoration: 'none', color: 'black' }}
                    to={page.route}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <Stack spacing={1} direction="row">
              <Button variant="contained"><Link
                    style={{  textDecoration: 'none', color: 'black' }}
                    to="/register"
                    >
                     Register
                    </Link></Button>
                <Button variant="contained">Login</Button>
              </Stack> 
            </Menu> 
          </Box>

          {/* Untuk tampilan website */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link
                    style={{  textDecoration: 'none', color: '#fff' }}
                    to={page.route}
                  >
                {page.name}
                </Link>
              </Button>
            ))}
            
          </Box>
          <Stack spacing={1} direction="row" sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained"> 
                  <Link style={{ textDecoration: 'none', color: '#fff' }} to="/profile">
                    My Profile
                  </Link></Button>
              <Button variant="contained"> 
                <Link style={{ textDecoration: 'none', color: '#fff' }} to="/register">
                  Sign In
                </Link></Button>
              <Button variant="contained">
                <Link style={{ textDecoration: 'none', color: '#fff' }} to="/login">
                  Login
                </Link>
              </Button>
            </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
