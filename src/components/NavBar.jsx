import React from 'react';

function NavBar({setMenuPage}) {
  return (
  <div className='Navbar flex justify-evenly'>
  
    <button onClick={() => setMenuPage('Electronics')}><div className='Electronics '>
     
     <div>
    <img 
    style={{width:"100px",borderRadius:"50px",}} src="Banner/Electronics_logo.webp" alt='Electronics-logo'>
     </img>
                       
                   <p  style={{
                       textAlign:"center",
                       fontSize:"18px",
                       fontWeight:"600",
                       padding:"0px",
                     
                       
                   }}>Electronics</p>    
                       </div>
     
   </div></button>
    
    <button onClick={() => setMenuPage('Accessories')}>
    <div className='Accessories'>
     
    
                        <div>
                    <img 
                    style={{width:"100px",borderRadius:"50px",}} src="Banner/Accessories_logo.webp" alt='Accessories-logo'>
                    </img>
                        
                    <p style={{
                        textAlign:"center",
                        fontSize:"18px",
                        fontWeight:"600",
                        padding:"0px",
                        
                        
                    }}>Accessories</p>    
                        </div>                   
                        
    </div></button>

    <button onClick={() => setMenuPage('Games')}>
    <div className='Games'>
    
      <img 
       style={{width:"100px",borderRadius:"50px",}} src="Banner/Games_logo.webp" alt='games-logo'>
      </img>
      
      <p style={{
        textAlign:"center",fontSize:"18px",fontWeight:"600",padding:"0px", 
        }}>Games</p>    
      </div>
      </button>

    </div>
  
  )
}

export default NavBar