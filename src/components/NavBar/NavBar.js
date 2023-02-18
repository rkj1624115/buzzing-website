import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div class="flex h-20 items-center  bg-[#293b7a] px-10 text-white border-b-2 border-[#f5986f]">
      <Link to="/">
        <div class="border-r-4 pr-1 border-[#f5986f] mr-20 text-xl">
          Marketplace
        </div>
      </Link>
      <div class="hidden lg:flex space-x-4 text-md font-bold flex-1 font-['ubuntu'] ">
        {/* <div>We Offer</div> */}
        <Link to="/weoffer">We Offer</Link>
        {/* <div>Features</div> */}
        <Link to="/feature">Features</Link>
        {/* <div>Subscriptions</div> */}
        {/* <div>My orders</div> */}
        {/* <div>Resources</div> */}
      </div>
      <div class="hidden lg:flex items-center space-x-4">
        <div class="bg-[#4f6ab4] px-3 py-[6px] rounded-full">Log in</div>
        <div class="font-bold">|</div>
        <div>EN</div>
      </div>
      <div class="lg:hidden flex-1 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
