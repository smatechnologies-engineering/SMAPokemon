import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom'


export function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: "#ee1515", display: 'flex', alignItems: 'center' }}>
            <Toolbar>
                <Link to={"/"} style={{ padding: '5px', color: "#f0f0f0" }}>Home</Link>
                <Link to={"/search"} style={{ padding: '5px', color: "#f0f0f0" }}>Search</Link>
                <Link to={"/pokedex"} style={{ padding: '5px', color: "#f0f0f0" }}>Pokedex</Link>
            </Toolbar>
        </AppBar>
    );
};
