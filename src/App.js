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
      <form onSubmit={handleSubmit}>
    <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     
                    <h2>Reservation CRUD</h2>
                </Grid>
                <TextField label='Party Name' placeholder="Enter Party Name" fullWidth required/>
                <TextField label='Party Number' placeholder='How many in the party?' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </ form>
    </div>

  );
};

export default App;
