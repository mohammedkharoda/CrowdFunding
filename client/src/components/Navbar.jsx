import React, { useState } from "react";

import { Custombutton } from ".";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address = 0x0ab
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
        <div className='flex lg:flex-1 flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24]  rounded-[100px]'>
          <input type='text' placeholder='Search for campagins' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b52564] text-white bg-transparent outline-none
          '></input>
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <img src={search} alt='search' className='w-[15px] h-[15px] object-contain'/>
        </div>
          <div className='flex md:hidden flex-row justify-end gap-4'>
            <Custombutton btnType='button' title={address ? 'Create a campaign' : 'Connect'} style={address ? 'bg-[#1dc071]' :'bg-[#8c6dfd]'} handleClick = {() => { if(address) navigate('create-campaign')
            else 'connect()'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
