import css from '../takenote4/takenote4.css'
import { Button, IconButton, Radio, TextField } from "@mui/material"

export const CustomerDetails=()=>{
    return(
        <div className='customermain'>
        <div className="customer">
            <div className='customerbutton'><p id="customer">Customer Details</p>
            <button id="addressbutton">Add New Address</button></div>
            <div className='customerform'>
            <div className='text1'>
            <div className='nametext'>First Name
            <TextField type="text" id="input1"></TextField></div>
            <div className='nametext'>Mobile Number
            <TextField type="text" id="input1"></TextField></div>
            </div>
            <div>
            <div className='label1'><label>Address</label></div>
            <TextField type="text" id="input3"></TextField>
            </div>
            <div className='text1'>
            <div className='nametext'>City/Town
            <TextField type="text" id="input1"></TextField></div>
            <div className='nametext'>State
            <TextField type="text" id="input1"></TextField></div>
            </div>

            <div className='type'><label>Type</label>
            <div className='Radio'><IconButton><Radio></Radio></IconButton><span id='home'>Home</span>
            <IconButton><Radio></Radio></IconButton><span id='home'>Work</span> 
            <IconButton><Radio></Radio></IconButton><span id='home'>Other</span></div>     
            </div>
            </div>
            <div className='continue'>
                <Button id='continue'>Continue</Button>
            </div>
        </div>
        </div>
    )
}