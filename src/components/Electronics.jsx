import React from 'react'
import Products from "../products.js";
import {HeartIcon } from '@heroicons/react/24/outline';

function Electronics({addToCart,addToWishList}) {

  return (
    
    <div className='Electronics grid  xl:grid-cols-5  md:grid-cols-3 sm:grid-cols-2'>
     {
      Products.map((product)=>{
       return(product.type ==="electronics" ?
        <div key={product.id} className=" relative mb-5 mx-auto  border border-grey-50  w-52  box">
          
          <div className=' bg-gray-50'>
          <img src={product.image} 
        alt={product.description} 
        style={{width:"250px",height:"250px"}}
        className='mx-auto mb-5'
        />
        </div>

        <div >
       <h4 className='px-3  py-2'>{product.description}</h4>
          <p className='px-3 pb-3 text-lg'>{`$${product.price}`}</p>
          <button id="btn-addToCart" className=' bg-black text-white p-2 lg:py-1 mx-2 mb-3 rounded-lg'
        onClick={()=>addToCart(product)}>AddToCart</button>
        
        </div>
        <HeartIcon
              aria-hidden="true"
              className="absolute top-2 right-2 p-2 h-9 bg-black text-white rounded-full cursor-pointer"
              onClick={() => addToWishList(product)}
            />
        
        </div>
        
        
        :<></>) 
      })
     }
      </div>
  )
}


export default Electronics;