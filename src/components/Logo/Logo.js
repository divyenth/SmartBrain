import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
			 <div className="Tilt-inner">
			 	<img style={{paddingTop:'25px'}} src={brain} alt = 'SmartBrain'/>
			 </div>
			</Tilt>
		</div>
	);
}

export default Logo;