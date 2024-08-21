import React,{useState,useEffect} from 'react';
import Carousel from './Carousel';
import NavBar from './NavBar';
import Electronics from "./Electronics";
import Accessories from './Accessories';
import Games from './Games';






function HomePage({addToCart,addToWishList,setMenuPage,menuPage}) {
 
  
  const [show,setShow] = useState(false);
  const [color,setColor] = useState("#000000");
  const [loading,setLoading] = useState(true);

  

  useEffect(()=>
  {
    setTimeout(() => {
       setLoading(false);
       setShow(true);
    }, 1000);
     
  }, []);

    

    return (
      <div className="App ">
        <div className=' container mx-auto md:mt-5'>
        
        
    
        
     <div> 
        <Carousel/>
       
        <NavBar setMenuPage={setMenuPage}/>
        
       <div className='container mx-auto mt-10'>
       
       {menuPage === 'Electronics' && <Electronics addToCart={addToCart} addToWishList={addToWishList}  />}
      {menuPage === 'Accessories' && <Accessories addToCart={addToCart} addToWishList={addToWishList} />}
      {menuPage === 'Games' && <Games addToCart={addToCart} addToWishList={addToWishList}/>}
       </div>
       </div>
        </div> 
 
       

      </div>
    )
}

export default HomePage;