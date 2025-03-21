import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { FC } from 'react'

type FooterProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer : FC<FooterProps> = ({isDarkMode,setIsDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'> 
            <Image alt="" src={isDarkMode ? assets.logo_dark : assets.logo} className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image alt="" src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6'/>
                rn842012@student.nitw.ac.in
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>@ 2025 Rahul Naval. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0m'>
                    <li>
                        <a target="_blank" href="https://github.com/RahulNaval21">GitHub</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/rahul-naval-b320ba217/">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.geeksforgeeks.org/user/rnaval/">GFG</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://leetcode.com/u/rahulnaval/">Leetcode</a>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
  )
}

export default Footer