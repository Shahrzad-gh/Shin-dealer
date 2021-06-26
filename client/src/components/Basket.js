import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Card from "@material-ui/core/Card"
function Basket() {
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    try {
      axios.get('/getusercartItems', {params: {
        id: "608e7966d9205f2698cde28b"
      }}).then(res => 
        
        setBasket(res.data.cart.cartItems)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <div>
      {basket && basket.map((item, index) => 
        <Card key={index} >{item._id}</Card>)}
    </div>
  )
}

export default Basket
