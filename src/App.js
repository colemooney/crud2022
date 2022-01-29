import React, { useState } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Checkbox from '@material-ui/core/Checkbox';


import './App.css';

const defaultValues = {
  name: "",
  party: 0,
  occasion: "",
  
};


function App() {
  const [formValues, setFormValues] = useState(defaultValues);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  return (
    <div className="App">
      <form sx={{ p:2 }} onSubmit={handleSubmit}>
    <Grid container spacing={3}>
            <Paper sx={{ p:10 }} elevation={10} style={paperStyle}>
                <Grid item align='center'>
                     
                    <h2>Reservation CRUD</h2>
                </Grid>
                <Grid sx={{ p: 3 }} >
                <TextField 
                onChange={handleInputChange}
                name="name"
                label='Party Name' 
                placeholder="Enter Party Name" 
                fullWidth required
                spacing={5}
                />

              <TextField 
                onChange={handleInputChange}
                name="email"
                label='Email' 
                placeholder="...@gmail.com" 
                fullWidth required
                sx={{ p: 2}}
                />

                <TextField 
                onChange={handleInputChange}
                name="party"
                label='Party Number' 
                placeholder='How many in the party?' 
              
                fullWidth required
                />
                </Grid>
                <FormControl>
            <FormLabel>Special Occasion</FormLabel>
            <RadioGroup
              name="occasion"
              value={formValues.occasion}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="birthday"
                value="birthday"
                control={<Radio size="small" />}
                label="Birthday"
              />
              <FormControlLabel
                key="anniversary"
                value="anniversary"
                control={<Radio size="small" />}
                label="Anniversary"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                
            </Paper>
        </Grid>
        </ form>
    </div>

  );
};

export default App;
