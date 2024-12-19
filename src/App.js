import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesController from './Routes/RoutesController';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem('wishList')) || []);
  const [Order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);
  const [menuPage, setMenuPage] = useState('Electronics');

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin) {
      setLogin(JSON.parse(storedLogin));
    }

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const storedWishList = localStorage.getItem('wishList');
    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }

    const storedOrders = localStorage.getItem('order');
    if (storedOrders) {
      setOrder(JSON.parse(storedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(Order));
  }, [Order]);

  const handleLogin = (isLoggedIn) => {
    setLogin(isLoggedIn);
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.description === item.description);

    if (existingItem) {
      toast.error("Already in Cart..");
      const updatedCart = cart.map((cartItem) =>
        cartItem.description === item.description
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const addToWishList = (item) => {
    const existingWishList = wishList.find((wishListItem) => wishListItem.description === item.description);

    if (existingWishList) {
      toast.warning("Already in WishList..");
      const updatedWishList = wishList.map((wishListItem) =>
        wishListItem.description === item.description
          ? { ...wishListItem }
          : wishListItem
      );
      setWishList(updatedWishList);
    } else {
      setWishList([...wishList, item]);
    }
  };

  return (
    <div className='App'>
      {login ? (
        <div className='container mx-auto'>
          <ToastContainer autoClose={900} />
          <Header 
            cart={cart} 
            wishList={wishList} 
            addToCart={addToCart} 
            Order={Order} 
            setWishList={setWishList} 
            setMenuPage={setMenuPage} 
            setOrder={setOrder}
          />
          <RoutesController 
            addToCart={addToCart}
            cart={cart}
            setCart={setCart}
            addToWishList={addToWishList}
            setMenuPage={setMenuPage}
            menuPage={menuPage}
            wishList={wishList}
            setWishList={setWishList}
            Order={Order}
            setOrder={setOrder}
          />
          <Footer />
        </div>
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
      
    </div>
  );
}

export default App;