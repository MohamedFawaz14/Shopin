import React from 'react'
import Products from "../products";
import {HeartIcon } from '@heroicons/react/24/outline';

function Games({addToCart,addToWishList}) {
  return (
    <div className=' Games grid  xl:grid-cols-5  md:grid-cols-3 sm:grid-cols-2' >
      {
      Products.map((product)=>{
       
       return(product.type ==="games" ?
        <div key={product.id} className=" relative mb-3 mx-auto  border border-grey-50 w-52 box">

      <div className=' bg-gray-50'>
        <img src={product.image} 
        alt={product.description}
         key={product.id}
         style={{ width: "250px", height: "250px" }}
        className='mx-auto mb-5'
        ></img>
        </div>

        <div>
       <h4 className='px-3  py-2'>{product.description}</h4>
          <p className='px-3 pb-3 text-lg'>{`$${product.price}`}</p>

        <button id="btn-addToCart" 
        className=' bg-black text-white px-2 mx-2 mb-2 rounded-lg text-md p-2 lg:py-1'
        onClick={()=>addToCart(product)}>
          AddToCart
        </button>
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

export default Games