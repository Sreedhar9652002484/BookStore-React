import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import cssstyle from  '../forgetpassword/forgetpassword.css'
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  return (
    <div className='forgetpass'>
        <p id='forget'>Forget Your Password?</p>
       
    <Card sx={{ maxWidth: 350, height:320, backgroundColor:'#f8f6f6' }}>
    <div className='emailclass1'>
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
          Enter your email address and we'll send you a link to reset your password
        </Typography >
        <div className='emailpass'>
        <div className="email">
          <p id='emailtext'>Email Id</p>
          <TextField id="outlined-basic" type="text"  /></div>
        <div  className="reset"><button id="submit1" >Reset Password</button></div>
        </div>
      </CardContent>
      </div>
      
      <CardActions className='create'> 
        <Link to="/signup" id="createacc">CREATE ACCOUNT</Link>
      </CardActions>
    </Card>
    </div>
   
  );
}
