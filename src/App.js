
import CssBaseline from'@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from './Components/navbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './App.css';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
    "textField": {
        "textColor": "#ffffff",
        "focusColor": "#ffffff",
        "borderColor": "#ffffff",
        "hintColor": "#ffffff",
        "floatingLabelColor": "#ffffff",
        "errorColor": "#ffebee"
    }

});


function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
      <CssBaseline />
    <div style={{ width: '100%'}} className="Main">
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      >
     <Box
     sx={{
       width: "50vw",
       height: "40vh",
       display: "flex",
       justifyContent: "center",
       
       border: "1px solid grey",
       backgroundColor: 'primary.dark',
       
       
     }}
     >
       <Stack component="form">

       <Typography variant="h1" color="white" component="div" gutterBottom>
        Reservation CRUD
      </Typography>

      <TextField label="Outlined secondary" color="secondary"  />
      <hr />
      <TextField label="Outlined secondary" color="secondary"  />

       </Stack>
</Box>
     </Box>
     
     </div>
    </div>
  );
}

export default App;
