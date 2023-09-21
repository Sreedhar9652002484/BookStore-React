import { Button } from '@mui/material'
import orderimage from '../../../assests/OrderSuccessful.png'
import css from '../takenote6/takenote6.css'
import { useNavigate } from 'react-router-dom'

export const OrderSuccessful = () => {

    const navigate=useNavigate();
    const hanldeShopping=()=>{
        navigate('/dashboard')
    }
    return (
        <div className='ordersuccesful'>
            <div>
                <img id='ordersuccessful' src={orderimage}></img>
            </div>
            <div>
                <p id='orderpara'>hurray!!! your order is confirmed <br />
                    the order id is #19189 save the order id for<br />
                    further communication...
                </p>
            </div>
            <div >
                <div className='emaildiv'>
                    <p id='emaildiv'>Email us</p>
                    <p>Contact us</p>
                    <p>Address</p>
                </div>
                <table>
                    <tr>
                        <td>
                        <p>admin@bookstore.com</p>
                        </td>
                        <td>
                        <p>+91 8309713662</p>
                        </td>
                        <td>
                        <p>19, 14th main, 15th Cross, Sector5, <br/> Opp to Christ University, near Forum Mall,<br/> HSR Layout, Banglore 560034</p>
                        </td>
                    </tr>
                </table>
            </div>

            <Button id='shopbutton' onClick={hanldeShopping}>Continue Shopping</Button>

        </div>
    )
}