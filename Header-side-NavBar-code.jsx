import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMagnifyingGlass} from "react-icons/hi2";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaClapperboard } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import HeaderItem from './HeaderItem';

function Header() {
    const menu=[
        {
            name: 'HOME',
            icon:GoHomeFill

        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:"TV",
            icon:PiTelevisionSimpleBold
        },
        {
            name:"MOVIES",
            icon:FaClapperboard

        }
    ]
    const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div className='w-30 h-screen text-white p-2 flex flex-col space-y-10 '>
        
        <img src={logo} className='w-[90px] md:w-[115px] object-cover'/>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} onHover={() => setHoveredItem(item.name)} isHovered={hoveredItem === item.name}/>
        ))}
        
        

        <img src='https://img.freepik.com/premium-photo/cartoon-boy-kiddy-generated-by-ai_3788-59.jpg' 
        className='w-[50px] rounded-full' />
        
    </div>
    
  )
}

export default Header
