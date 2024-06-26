import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";

/* const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: green;
  &.Mui-selected {
    color: #206b85;
  }
`); */

export default function FixedBottomNavigation() {
const [value, setValue] = React.useState(0);
const ref = React.useRef(null);



return (
    <Box sx={{ pb: 7 }} ref={ref}>
    <CssBaseline />
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
    </Paper>
    </Box>
);
}
