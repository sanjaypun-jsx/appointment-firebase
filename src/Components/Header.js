import { Divider } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const StyledHeader = styled(motion.header)`
color:white;
font-size:30px;
margin-top:3vh;
`;

const StyledDivider = styled(Divider)`
background-color:white;
width:60%;
margin:auto;
margin-top:3vh;
`;

const titleVariant = {
	hidden: {
		y: '-20vh',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	return (
		<div>
			<div>
				<StyledHeader variants={titleVariant} initial='hidden' animate='visible'>
					Arkham Asylum
				</StyledHeader>
			</div>
			<div animate={{ opacity: 1 }}>
				<StyledDivider />
			</div>
		</div>
	);
};

export default Header;
