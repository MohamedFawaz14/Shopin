import React from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



const Orders = ({Order,setOrder}) => {
  const displayOrders = Order.length > 0;
  const handleRemoveOrder =(item)=>
  {
      const removeOrder = Order.filter((orderItem)=>(orderItem.description !== item.description));
      setOrder(removeOrder);
  }

  const handleOrderSummary = async (order) => {
    if (order.length > 0) {
      const orderDetails = order.map(item => (
        `\n Item: ${item.description},
        Quantity: ${item.quantity},
        Price: $${item.price}`
      )).join('\n');
  
      const orderMessage = `Order canceled!\n\nOrder Details:\n${orderDetails}\n`;
  
      try {
        await axios.post('https://api.twilio.com/2010-04-01/Accounts/AC2acfd7a1cd8765a23bc1d695d8fdd607/Messages.json', new URLSearchParams({
          To: 'whatsapp:+918610198693',
          From: 'whatsapp:+14155238886',
          Body: orderMessage
        }), {
          auth: {
            username: 'AC2acfd7a1cd8765a23bc1d695d8fdd607',
            password: 'aebbaee99bfc4ca32664238e0d9398f4'
          }
        });
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send order details to WhatsApp.');
      }
    } else {
      console.log('No items in the order. No message sent.');
    }
  };
  

  const ordered = new Date();
  const OrderPlaced = ordered.toDateString();
  const shipping = new Date(ordered);
  shipping.setDate(ordered.getDate()+7);
  const preparingToShip=  shipping.toDateString();
 
   

  return (
    
    <div className={`Orders ${displayOrders ? 'grid lg:grid-cols-6 lg:ms-40 mt-10' : 'mt-10'}`}>
      {displayOrders?
      (Order.map((item,index)=>
      (
        <div className=" bg-white rounded-xl shadow-xl lg:ms-4 mt-4">
        <div className="">
          <div className="md:flex-shrink-0">
            <img className="h-full md:w-48" src={item.image} alt="Product" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Order #{index+1}</div>
            <p  className="block mt-1 text-lg leading-tight font-medium text-black ">{item.description}</p>
            <p className="mt-2 text-gray-500">${item.price}</p>
            
            <div className="mt-4">
              <div className="text-sm text-gray-500">Order placed {OrderPlaced}</div>
              <div className="text-sm text-gray-500 mt-1">Preparing to ship on {preparingToShip}</div>
              <div className="text-sm text-gray-500 mt-1">Processing</div>
              <button className='p-2 bg-black text-white rounded-xl my-3 text-lg' onClick={() =>
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='custom-ui bg-white shadow-lg p-10 rounded-xl'>
                      <h1 className='text-2xl mb-3 text-black font-semibold font-serif'>Are you sure?</h1>
                      <button
                        onClick={async () => {
                          handleRemoveOrder(item);
                          await handleOrderSummary([item]);
                          onClose();
                        }}
                        className='text-xl bg-red-600 text-white p-2 mx-2 font-bold rounded-xl'
                      >
                        Delete
                      </button>
                      
                      <button onClick={onClose} className='text-xl bg-black text-white p-2 mx-2 font-bold rounded-xl'>
                        Cancel</button>
                    </div>
                  );
                }
              })}> Cancel</button>
                          
            </div>
          </div>
        </div>
      </div>
      )))
      : <h1 className='text-3xl lg:mt-14 lg:ms-40 font-serif '>No Orders ⚓</h1>}
    
    
    </div>
  );
};

export default Orders;
