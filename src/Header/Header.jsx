import { AppBar } from "@mui/material";

function Header () {

    return(
        <>
        <AppBar position="static" className="app-header"
        sx={{ backgroundColor: 'rgba(133,15,16,1)'}}>
         <h1>The Movies Saga!</h1>
         </AppBar>
        </>
    )
}

export default Header;