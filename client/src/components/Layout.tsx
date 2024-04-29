import { FC, PropsWithChildren } from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container, Grid,
  IconButton,
  Toolbar
} from "@mui/material";
import MainMenu from "./MainMenu.tsx";

interface Props {

}
const Layout: FC<PropsWithChildren<Props>> = ({children}) => {

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="left">
            <MainMenu/>
          </Grid>
          <Button color="inherit" href={'login'}>Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        {children}
      </Container>
    </Box>
    )
}

export default Layout
