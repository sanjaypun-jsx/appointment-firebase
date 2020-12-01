import { Divider } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
margin-top:1vh;
padding:20px 50px;
background-color:white;
color:black;
border-radius:40px;
text-decoration:none;
outline:none;
border:none;
cursor:pointer;
font-size:20px;
&:hover{
    color:black;
    background-color:#e3f2fd;
}
`;

const StyledH1 = styled(motion.p)`
margin-top:25vh;
font-size:40px;
color:white;
`;

const StyledP = styled(motion.p)`
color:white;
font-size:20px;`;

const textVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 2,
		},
	},
};

const buttonVariant = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		type: 'spring',
		mass: 8,
		duration: 2,
	},
};
const Landing = () => {
	return (
		<div>
			<StyledH1 variants={textVariant} initial='hidden' animate='visible'>
				Gotham State Mental Health Care
			</StyledH1>
			<StyledP variants={textVariant} initial='hidden' animate='visible'>
				Are you going through hard time?
			</StyledP>
			<Link to='/docs'>
				<StyledButton variants={buttonVariant} initial='hidden' animate='visible'>
					SEE THERAPISTS
				</StyledButton>
			</Link>
		</div>
	);
};

export default Landing;
