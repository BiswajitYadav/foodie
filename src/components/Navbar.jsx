import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WalletIcon from '@mui/icons-material/Wallet';
import HelpIcon from '@mui/icons-material/Help';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';

const Navbar = () => {
const [nav,setNav] = useState(false)

  return (
    <>
     <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

      <div className='flex gap-2 items-center'>
        <div className='cursor-pointer mt-1' onClick={()=>setNav(!nav)}><MenuIcon /></div>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-start pr-2 cursor-default'>Best<span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex bg-gray-300 p-1 rounded-full cursor-pointer'>
          <p className='text-sm bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='text-sm p-2 px-2'>Pickup</p>
        </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <SearchIcon />
        <input className='p-2 bg-transparent w-full focus:outline-none' type="text" placeholder='Search Food' />
      </div>

      <button className='hidden lg:flex bg-black text-white rounded-full py-2'>
        <ShoppingCartIcon /> Carts
      </button>

      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <CloseIcon onClick={()=>setNav(!nav)} size={30} className='absolute top-5 right-4 cursor-pointer'/>
        <h2 className='p-4 text-2xl cursor-default'>
          Best<span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex cursor-pointer'><LocalShippingIcon className='mr-4'/>Order</li>
            <li className='text-xl py-4 flex cursor-pointer'><FavoriteIcon className='mr-4'/>Favorite</li>
            <li className='text-xl py-4 flex cursor-pointer'><WalletIcon className='mr-4'/>Wallet</li>
            <li className='text-xl py-4 flex cursor-pointer'><HelpIcon className='mr-4'/>Help</li>
            <li className='text-xl py-4 flex cursor-pointer'><LocalOfferIcon className='mr-4'/>Promotions</li>
            <li className='text-xl py-4 flex cursor-pointer'><StarIcon className='mr-4'/>Best Ones</li>
            <li className='text-xl py-4 flex cursor-pointer'><ShareIcon className='mr-4'/>Invite Friends</li>
          </ul>
        </nav>
      </div>

     </div>
    </>
  )
}

export default Navbar