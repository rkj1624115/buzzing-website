import React from 'react';

const NavBar = () => {
  return (
    <div class="flex h-20 items-center  bg-[#293b7a] px-10 text-white border-b-2 border-[#f5986f]">
      <div class="border-r-4 pr-1 border-[#f5986f] mr-20 text-xl">
        Marketplace
      </div>
      <div class="flex space-x-4 text-md font-bold flex-1 font-['ubuntu'] ">
        <div>We Offer</div>
        <div>Features</div>
        <div>Subscriptions</div>
        <div>My orders</div>
        <div>Resources</div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="bg-[#4f6ab4] px-3 py-[6px] rounded-full">Log in</div>
        <div class="font-bold">|</div>
        <div>EN</div>
      </div>
    </div>
  );
};

export default NavBar;
