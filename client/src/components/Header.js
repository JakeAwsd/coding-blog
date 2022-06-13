import React from 'react';
import { MdLogin } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { MdInvertColors } from 'react-icons/md';
import {MdAccountCircle } from 'react-icons/md';



const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Posts</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='MdInvertColors'
			>
					<MdInvertColors
				
				className='MdInvertColors'
				size='1.3em'
				radius='10px'
			/> 
			</button>
			
			<button className='MdLogin' >
			<MdLogin
				
					className='MdLogin'
					size='1.3em'
				/>
		 </button>
		 <button className='MdAccountCircle' >
			<MdAccountCircle
				className='MdAccountCircle'
				size='1.3em'
			/>
			</button>
		    <button className='MdLogOut' >
			<MdLogout
				className='MdLogout'
				size='1.3em'
			/>
			</button>

	

		</div>
	);
};

export default Header;