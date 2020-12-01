import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled(motion.div)`
background-color:white; 
height:10px;
width:10px;
border:20px solid white;
border-radius: 50%;
`;

const loaderVariant = {
	animationOne: {
		x: [ -20, 20 ],
		y: [ 0, -30 ],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
		},
	},
};

const Loader = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50vh' }}>
			<StyledDiv variants={loaderVariant} animate='animationOne' />
		</div>
	);
};

export default Loader;
