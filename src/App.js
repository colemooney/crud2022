import * as React from 'react';
import CssBaseline from'@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from './Components/navbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';

import './App.css';



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
       height: "50vh",
       display: "flex",
       justifyContent: "center",
       
       border: "1px solid grey",
       
       
       
     }}
     >
       <Stack component="form">

       <Typography variant="h1" color="primary" component="div" gutterBottom>
        Reservation CRUD
      </Typography>

      <TextField label="Reservation First Name"   />
      <hr />
      <TextField label="Reservation Last Name"   />
      <hr />
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        
        InputLabelProps={{
          shrink: true,
        }}
      />
       
       </Stack>
</Box>
     </Box>
     
     </div>
    </div>
  );
}

export default App;
