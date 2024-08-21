import React from 'react';


const WishList = ({ wishList,addToCart,setWishList }) => {
  const displayWishListItem = wishList.length > 0;
  const removeItem = ( itemWishList)=>
  {
    const updatedWishList = wishList.filter((item)=>item.description !== itemWishList.description);
    setWishList(updatedWishList);
  }

  return (
    <div className={`WishList ${displayWishListItem ? 'grid lg:grid-cols-6 lg:ms-40 mt-10' : 'mt-10'}`}>
      {displayWishListItem ? (
        wishList.map((item, index) => (
          <div key={item.id} className="mb-5 mx-auto  border border-gray-100 w-52 box">
            <div className='bg-gray-50'>
              <img 
                src={item.image} 
                alt={item.description} 
                style={{ width: "250px", height: "250px" }}
                className='mx-auto mb-5'
              />
            </div>
            <div>
              <h4 className='px-3 py-2'>{item.description}</h4>
              <p className='px-3 pb-3 text-lg'>{`$${item.price}`}</p>
              <button id="btn-addToCart"
              className=' bg-black text-white px-2 mx-2 mb-3 rounded-lg p-2 lg:py-1 '
              onClick={()=>addToCart(item)}>
                AddToCart
                </button> <button className =' text-red-600' onClick={()=>removeItem(item)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-2xl lg:text-3xl mt-14 lg:ms-40 font-serif ">WishList is Empty  🖤</h1>
      )}
    </div>
  );
}

export default WishList;
