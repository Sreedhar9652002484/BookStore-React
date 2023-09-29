import { useEffect, useState } from 'react'
import css from './customerdetails.css'
import { Button, IconButton, Radio, TextField } from "@mui/material"
import { OrderSummary } from '../OrderSummanry/ordersummary';
import { CustomerDetailsEdit } from '../../../services/bookservice';

export const CustomerDetails=({handleordersummary})=>{
const[order, setOrder]=useState(false);

const [address, setAddress]=useState({
    addressType: "",
  fullAddress:"",
  city: "",
  state: ""
   })

   const handleAddress=(event)=>{
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });

    
   }
  console.log("aaaaaaaaaaaaa",address)


const handleContinue=async()=>{
    console.log("continued");
    setOrder(true)
   handleordersummary(true);
   let response=await CustomerDetailsEdit(address);
   console.log("kkkkkkkk", response.data.result.address);
   
}
    return(
        <div className='customermain'>
        <div className="customer">
            <div className='customerbutton'><p id="customer">Customer Details</p>
            <button id="addressbutton">Add New Address</button></div>
            <div className='customerform'>
            <div className='text1'>
            <div className='nametext'>Full Name
            <TextField type="text" id="input1"></TextField></div>
            <div className='nametext'>Mobile Number
            <TextField type="text" id="input1"></TextField></div>
            </div>
            <div>
            <div className='label1'><label>Address</label></div>
            <TextField type="text" id="input3"onChange={handleAddress} value={address.fullAddress} name='fullAddress'
    
            ></TextField>
            </div>
            <div className='text1'>
            <div className='nametext'>City/Town
            <TextField type="text" id="input1" onChange={handleAddress} value={address.city} name='city'></TextField></div>
            <div className='nametext'>State
            <TextField type="text" id="input1"onChange={handleAddress} value={address.state} name='state' ></TextField></div>
            </div>
            <div className='type'><label>Type</label>
            <div className='Radio'><IconButton><Radio onChange={handleAddress}value="Home" name='addressType' checked={address.addressType==='Home'}></Radio></IconButton><span id='home'>Home</span>
            <IconButton><Radio  onChange={handleAddress}value="Office" name='addressType' checked={address.addressType==='Office'} ></Radio></IconButton><span id='home'>Office</span> 
            <IconButton><Radio  onChange={handleAddress}value="Other" name='addressType' checked={address.addressType==='Other'}></Radio></IconButton><span id='home'>Other</span></div>     
            </div>
            </div>
            { order ?'':
            <div className='continue' > 
                <Button onClick={handleContinue} id='continue'>Continue</Button>
                
            </div>
            }
              
        </div>
             
        </div>
    )
}