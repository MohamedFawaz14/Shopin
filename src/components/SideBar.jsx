import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, HeartIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';
import Orders from './Orders';
import WishList from './WishList';

export default function SideBar({cart,wishList,addToCart,Order,setWishList,setMenuPage,setOrder})
{


const navigation = {
  categories: [
    {
      id: 'wishList',
      name: 'WishList',
      featured: wishList || [],
      sections: [
        {
          id: 'categories',
          name: 'Categories',
          items: [
            { name: 'Electronics', onClick: (setMenuPage) => setMenuPage('Electronics') },
            { name: 'Accessories', onClick: (setMenuPage) => setMenuPage('Accessories') },
            { name: 'Games', onClick: (setMenuPage) => setMenuPage('Games') },
          ],
        },
        
      ],
    },
    {
      id: 'TrackMyOrder',
      name: 'TrackMyOrder',
      featured: Order ||[],
      sections: [
        {
          id: 'Categories',
          name: 'Categories',
          items: [
            { name: 'Electronics', onClick: (setMenuPage) => setMenuPage('Electronics') },
            { name: 'Accessories', onClick: (setMenuPage) => setMenuPage('Accessories') },
            { name: 'Games', onClick: (setMenuPage) => setMenuPage('Games') },
          ],
        },
        
       
      ],
    },
  ],

}
  
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);


  
  return (

    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-black data-[selected]:text-black"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-2 ">
                   <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
                   {category.name === 'TrackMyOrder' ? (
                    <Orders Order={Order} setOrder={setOrder}/>
                  ) : <WishList wishList={wishList} setWishList={setWishList} addToCart={addToCart}/>
                  }
                   </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                               <button onClick={() => item.onClick(setMenuPage)}>{item.name}</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>


          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white md:mt-6">
        

        <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8 lg:py-5 mt-3">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6 md:h-10 md:w-10"  />
              </button>

              {/* Logo */}
              <div className="ml-5 flex lg:ml-14">
                <Link to='/'>
                  <span className="sr-only">ShopIn</span>
                  <img
                    alt="shopin-logo"
                    src="Banner/shopInLogo.png"
                    className=" w-22 md:w-96  lg:h-28 lg:w-96 "
                    
                  />
                </Link>
              </div>

              <div className="ml-auto flex items-center lg:me-1" >

                {/* Wishlist */}
                <div className="lg:ml-6 hidden lg:block">
                  <Link to= '/wishList'  className="p-2   text-gray-800 hover:text-gray-600">
                   
                    <HeartIcon aria-hidden="true" className="h-10 w-10 mt-1 " />
                    
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-9 flow-root lg:ml-6 ">
                  <Link to= '/Cart'  className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="w-8 h-8 lg:h-10 lg:w-10 md:w-16 md:h-16  text-gray-900 group-hover:text-gray-600"
                    />
                    <span className="ml-2  text-lg font-medium  text-gray-700 group-hover:text-gray-500">{totalQuantity}</span>
                    
                  </Link>
                </div>

                

                {/* Order's */}
                <div className="ml-9  lg:ml-6 lg:me-20 hidden lg:block" >
                  
                  <Link to='/Orders'  className="group -m-2 p-2">
                    <img src='Banner/orders.png'
                      aria-hidden="true"
                      className="lg:w-20 lg:h-20 flex items-center"
                    />
              
                  </Link>

            
                 
                </div>


              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

